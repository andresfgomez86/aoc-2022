import { readFileSync } from "fs";
import { resolve } from "path";

const filePath = resolve(__dirname, "input.txt").replace("dist", "src");
const inputArray = readFileSync(filePath).toString();

const partOne = (input: string) => {
  let currentChars = new Set<string>();
  for (let i = 3; i < input.length; i++) {
    currentChars = new Set(input.slice(i - 3, i + 1));
    if (currentChars.size === 4) {
      return i + 1;
    }
  }
  return 0;
}

const partTwo = (input: string) => {
  let currentChars = new Set<string>();
  for (let i = 13; i < input.length; i++) {
    currentChars = new Set(input.slice(i - 13, i + 1));
    if (currentChars.size === 14) {
      return i + 1;
    }
  }
  return 0;
}

console.log("====== PART 1 ======")
console.log("Result: ", partOne(inputArray));
console.log("====== PART 2 ======")
console.log("Result: ", partTwo(inputArray));