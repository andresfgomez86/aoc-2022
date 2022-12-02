import { readFileSync } from "fs";
import { resolve } from "path";

const filePath = resolve(__dirname, "input.txt").replace("dist", "src");
const inputArray = readFileSync(filePath).toString().split("\n");

const partOne = (input: string[]) => {
  const giftBox = [];
  for (let gift of input) {
    const giftSize = gift.length;
    const borderWrap = "*".repeat(giftSize + 2);
    const topWrap = `${borderWrap}\n`;
    const bottomWrap = `\n${borderWrap}`;
    const middle = `*${gift}*`;
    const wrapped = `${topWrap}${middle}${bottomWrap}`;
    giftBox.push(wrapped);
  }

  return giftBox;
}

console.log("Result: ", partOne(inputArray));