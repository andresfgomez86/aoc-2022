import { readFileSync } from "fs";
import { resolve } from "path";

const filePath = resolve(__dirname, "input.txt").replace("dist", "src");
const inputArray = readFileSync(filePath).toString();

const partOne = (size: number) => {
  let openString = "/\\";
  let closeString = "_\\";
  const spaceString = " ";
  let openCount = 0;
  let spaceCount = size;
  const rows = size * 2;
  const cube: string[] = [];
  for (let i = 0; i < rows; i++) {
    if (i < rows / 2) {
      openCount++;
      spaceCount--;
    } else if (i === rows / 2) {
      openString = "\\/";
      closeString = "_/";
    } else {
      openCount--;
      spaceCount++;
    }
    const spaces = spaceString.repeat(spaceCount);
    const opening = openString.repeat(openCount);
    const closing = closeString.repeat(size);
    cube.push(`${spaces}${opening}${closing}`);
  }
  return cube.join("\n");
}

console.log("====== PART 1 ======")
console.log("Result: ");
console.log(partOne(parseInt(inputArray)));