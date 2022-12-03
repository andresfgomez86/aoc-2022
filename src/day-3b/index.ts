import { readFileSync } from "fs";
import { resolve } from "path";

const filePath = resolve(__dirname, "input.txt").replace("dist", "src");
const inputArray = readFileSync(filePath).toString().split(";");
const [gifts, reindeers] = inputArray;

const partOne = (packOfGifts: string[], reindeers: string[]) => {
  const maxCapacity: number = reindeers.join("").length * 2;
  const giftsWeight: number = packOfGifts.join("").length;
  return Math.floor(maxCapacity / giftsWeight);
}

console.log("====== PART 1 ======")
console.log("Result: ", partOne(gifts.split(","), reindeers.split(",")));