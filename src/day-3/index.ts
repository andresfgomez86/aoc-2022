import { readFileSync } from "fs";
import { resolve } from "path";

const filePath = resolve(__dirname, "input.txt").replace("dist", "src");
const inputArray = readFileSync(filePath).toString().split("\n");

const priorityList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

const partOne = (racksacks: string[]) => {
  let prioritySum = 0;
  for (let racksack of racksacks) {
    const middleIndex = racksack.length / 2;
    const firstCompartment = racksack.slice(0, middleIndex);
    const secondCompartment = racksack.slice(middleIndex);
    const scItems = new Set<string>(secondCompartment.split(""));
    let repeated = "";
    for (let i = 0; i < firstCompartment.length; i++) {
      const item = firstCompartment[i];
      if (scItems.has(item)) {
        repeated = item;
      }
      if (repeated) {
        prioritySum += priorityList.indexOf(repeated) + 1;
        break;
      }
    }
  }
  return prioritySum;
}

const partTwo = (racksacks: string[]) => {
  let prioritySum = 0;
  let elfCount = 0;
  for (let i = 0; i < racksacks.length; i += 3) {
    const fElf = racksacks[i] || "";
    const sElf = racksacks[i + 1] || "";
    const tElf = racksacks[i + 2] || "";
    const firstElfSet = new Set(fElf.split(""));
    const secondElfSet = new Set(sElf.split(""));
    const thirdElfSet = new Set(tElf.split(""));
    let biggerSack = firstElfSet;
    if (secondElfSet.size >= firstElfSet.size && secondElfSet.size >= thirdElfSet.size) {
      biggerSack = secondElfSet;
    } else if (thirdElfSet.size >= firstElfSet.size && thirdElfSet.size >= secondElfSet.size) {
      biggerSack = thirdElfSet;
    }
    const sack = Array.from(biggerSack);
    let repeated = "";
    for (let i = 0; i < sack.length; i++) {
      const item = sack[i];
      if (firstElfSet.has(item) && secondElfSet.has(item) && thirdElfSet.has(item)) {
        repeated = item;
      }
      if (repeated) {
        prioritySum += priorityList.indexOf(repeated) + 1;
        break;
      }
    }
  }
  return prioritySum;
}

console.log("====== PART 1 ======")
console.log("Result: ", partOne(inputArray));
console.log("====== PART 2 ======")
console.log("Result: ", partTwo(inputArray));