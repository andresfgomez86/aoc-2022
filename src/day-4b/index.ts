import { readFileSync } from "fs";
import { resolve } from "path";

interface Box {
  l: number
  w: number
  h: number
}

const filePath = resolve(__dirname, "input.txt").replace("dist", "src");
const inputArray = readFileSync(filePath).toString().split("\n");

const boxes: Box[] = inputArray.map(box => {
  const [l, w, h] = box.split(",").map(length => parseInt(length));
  return {
    l,
    w,
    h
  }
});

const partOne = (boxes: Box[]) => {
  const orderedBoxes = boxes.sort((a, b) => a.h - b.h);
  for (let i = 1; i < orderedBoxes.length; i++) {
    const currBox = orderedBoxes[i];
    const prevBox = orderedBoxes[i - 1];
    if (currBox.l <= prevBox.l || currBox.w <= prevBox.w || currBox.h <= prevBox.h) {
      return false;
    }
  }
  return true;
}

console.log("====== PART 1 ======")
console.log("Result: ", partOne(boxes));