import { readFileSync } from "fs";
import { resolve } from "path";

const filePath = resolve(__dirname, "input.txt").replace("dist", "src");
const inputArray = readFileSync(filePath).toString().split("\n");

const shapePoints: { [key: string]: number; } = {
  X: 1,
  Y: 2,
  Z: 3
}

const DRAW_SCORE = 3;
const WIN_SCORE = 6;

const winningRules: { [key: string]: { [key: string]: string; }; } = {
  A: { defeatedBy: "Y", equalsTo: "X" },
  B: { defeatedBy: "Z", equalsTo: "Y" },
  C: { defeatedBy: "X", equalsTo: "Z" }
}

const partOne = (strategy: string[]) => {
  let finalScore = 0;
  for (let round of strategy) {
    const [opponentsPick, myPick] = round.split(" ");
    let roundScore = shapePoints[myPick];
    if (myPick === winningRules[opponentsPick].equalsTo) {
      roundScore += DRAW_SCORE;
    } else if (myPick === winningRules[opponentsPick].defeatedBy) {
      roundScore += WIN_SCORE;
    }
    finalScore += roundScore;
  }
  return finalScore;
}

const pickOptions = new Set(["X", "Y", "Z"]);

const partTwo = (strategy: string[]) => {
  let finalScore = 0;
  for (let round of strategy) {
    const [opponentsPick, expectedOutcome] = round.split(" ");
    let myPick: string;
    let roundScore = 0;
    if (expectedOutcome === "X") {
      const roundOptions = new Set(pickOptions);
      roundOptions.delete(winningRules[opponentsPick].defeatedBy);
      roundOptions.delete(winningRules[opponentsPick].equalsTo);
      myPick = Array.from(roundOptions)[0];
    } else if (expectedOutcome === "Y") {
      myPick = winningRules[opponentsPick].equalsTo;
      roundScore += DRAW_SCORE;
    } else {
      myPick = winningRules[opponentsPick].defeatedBy;
      roundScore += WIN_SCORE;
    }

    roundScore += shapePoints[myPick];
    finalScore += roundScore;
  }
  return finalScore;
}

console.log("====== PART 1 ======")
console.log("Result: ", partOne(inputArray));
console.log("====== PART 2 ======")
console.log("Result: ", partTwo(inputArray));