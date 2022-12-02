import { readFileSync } from "fs";
import { resolve } from "path";

const filePath = resolve(__dirname, "input.txt").replace("dist", "src");
const inputArray = readFileSync(filePath).toString().split("\n").map(value => parseInt(value));

const partOne = (input: number[]) => {
  let maxCalories = 0;
  let currentElfCalories = 0;
  for (let i = 0; i < input.length; i++) {
    const currentItemCalories = input[i];
    if (isNaN(currentItemCalories)) {
      currentElfCalories = 0;
    } else {
      currentElfCalories += currentItemCalories;
    }
    if (currentElfCalories > maxCalories) {
      maxCalories = currentElfCalories;
    }
  }

  return maxCalories;
}

const partTwo = (input: number[]) => {
  let maxCalories = 0;
  let currentElfCalories = 0;
  const caloriesRecord = [];
  for (let i = 0; i < input.length; i++) {
    const currentItemCalories = input[i];
    currentElfCalories += (currentItemCalories || 0);
    if (currentElfCalories > maxCalories) {
      maxCalories = currentElfCalories;
    }
    if (isNaN(currentItemCalories) || i === input.length - 1) {
      caloriesRecord.push(currentElfCalories);
      currentElfCalories = 0;
    }
  }

  return caloriesRecord.sort((a, b) => b - a).slice(0, 3).reduce((count, value) => count + value);
}

console.log("====== PART 1 ======")
console.log("Result: ", partOne(inputArray));
console.log("====== PART 2 ======")
console.log("Result: ", partTwo(inputArray));