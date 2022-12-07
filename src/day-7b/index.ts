import { readFileSync } from "fs";
import { resolve } from "path";

const filePath = resolve(__dirname, "input.txt").replace("dist", "src");
const inputArray = readFileSync(filePath).toString().split("\n");
const a1 = inputArray[0].split(",");
const a2 = inputArray[1].split(",");
const a3 = inputArray[2].split(",");

const partOne = (a1: string[], a2: string[], a3: string[]) => {
  const a1Record = new Set(a1);
  const a2Record = new Set(a2);
  const a3Record = new Set(a3);
  const maxLength = Math.max(a1.length, a2.length, a3.length);
  for (let i = 0; i < maxLength; i++) {
    const elem1 = a1[i] || "";
    const elem2 = a2[i] || "";
    const elem3 = a3[i] || "";
    if (a2.indexOf(elem1) >= 0 || a3.indexOf(elem1) >= 0) {
      a1Record.delete(elem1);
    }
    if (elem2 && a1.indexOf(elem2) >= 0 || a3.indexOf(elem2) >= 0) {
      a2Record.delete(elem2);
    }
    if (elem3 && a1.indexOf(elem3) >= 0 || a2.indexOf(elem3) >= 0) {
      a3Record.delete(elem3);
    }
  }
  return [...Array.from(a1Record), ...Array.from(a2Record), ...Array.from(a3Record)];
}

console.log("====== PART 1 ======")
console.log("Result: ", partOne(a1, a2, a3));