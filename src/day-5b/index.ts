import { readFileSync } from "fs";
import { resolve } from "path";

const filePath = resolve(__dirname, "input.txt").replace("dist", "src");
const [giftsCities, maxGifts, maxCities] = readFileSync(filePath).toString().split(";");

const partOne = (giftsCities: number[], maxGifts: number, maxCities: number) => {
  const combinations = new Map<string, number>();
  combinations.set("", 0);
  let maxGiftCount = 0;

  giftsCities.forEach(giftCity => {
    const temporalCombinations = [...combinations.keys()];
    temporalCombinations.forEach(combination => {
      const currentSum = combinations.get(combination) || 0;
      const newSum = giftCity + currentSum;
      if ((combination === "" || combination.split(",").length < maxCities) && newSum <= maxGifts) {
        const separator = combination !== "" ? "," : "";
        const newCombination = `${combination}${separator}${giftCity}`;
        combinations.set(newCombination, newSum);
        maxGiftCount = newSum >= maxGiftCount ? newSum : maxGiftCount;
      }
    })
  })
  return maxGiftCount;
}

console.log("====== PART 1 ======")
console.log("Result: ", partOne(giftsCities.split(",").map(e => parseInt(e)), parseInt(maxGifts), parseInt(maxCities)));