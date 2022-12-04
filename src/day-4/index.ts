import { readFileSync } from "fs";
import { resolve } from "path";

const filePath = resolve(__dirname, "input.txt").replace("dist", "src");
const inputArray = readFileSync(filePath).toString().split("\n");

const partOne = (input: string[]) => {
  let count = 0;
  for (let pair of input) {
    const [firstElf, secondElf] = pair.split(",");
    const [firstElfStart, firstElfEnd] = firstElf.split("-").map(value => parseInt(value));
    const [secondElfStart, secondElfEnd] = secondElf.split("-").map(value => parseInt(value));
    if (firstElfStart <= secondElfStart && firstElfEnd >= secondElfEnd) {
      count++;
    } else if (secondElfStart <= firstElfStart && secondElfEnd >= firstElfEnd) {
      count++;
    }
  }
  return count;
}

const partTwo = (input: string[]) => {
  let count = 0;
  for (let pair of input) {
    const [firstElf, secondElf] = pair.split(",");
    const [firstElfStart, firstElfEnd] = firstElf.split("-").map(value => parseInt(value));
    const [secondElfStart, secondElfEnd] = secondElf.split("-").map(value => parseInt(value));
    if (firstElfStart >= secondElfStart && firstElfStart <= secondElfEnd) {
      count++;
    } else if (firstElfEnd >= secondElfStart && firstElfEnd <= secondElfEnd) {
      count++;
    } else if (secondElfStart >= firstElfStart && secondElfStart <= firstElfEnd) {
      count++;
    } else if (secondElfEnd >= firstElfStart && secondElfEnd <= firstElfEnd) {
      count++;
    }
  }
  return count;
}

console.log("====== PART 1 ======")
console.log("Result: ", partOne(inputArray));
console.log("====== PART 2 ======")
console.log("Result: ", partTwo(inputArray));