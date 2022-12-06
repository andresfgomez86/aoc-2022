import { readFileSync } from "fs";
import { resolve } from "path";

const filePath = resolve(__dirname, "input.txt").replace("dist", "src");
const inputArray = readFileSync(filePath).toString().split("\n");

const partOne = (input: string[]) => {
  const stacks: Map<string, string[]> = new Map();
  let currentRow = 0;
  while (input[currentRow].indexOf("[") > -1) {
    const row = input[currentRow];
    for (let i = 1; i < row.length; i += 4) {
      const currentCrate = row[i];
      if (currentCrate !== " ") {
        const stackNumber = `${((i - 1) / 4) + 1}`;
        if (!stacks.get(stackNumber)) {
          stacks.set(stackNumber, []);
        }
        stacks.get(stackNumber)?.push(currentCrate);
      }
    }
    currentRow++;
  }
  currentRow += 2;

  while (input[currentRow]) {
    let step = input[currentRow].replace(/\s/g, "");
    const [restTo, to] = step.split("to");
    const [restFrom, from] = restTo.split("from");
    const move = parseInt(restFrom.split("move")[1]);
    const movedCrates = stacks.get(from)?.splice(0, move).reverse() || [];
    const alteredStack = [...movedCrates, ...stacks.get(to) || []]
    stacks.set(to, alteredStack);
    currentRow++;
  }

  const neededCrates: string[] = [];
  let currentStack = 1;
  while (stacks.get(`${currentStack}`)) {
    neededCrates.push(stacks.get(`${currentStack}`)?.[0] || "");
    currentStack++;
  }
  return neededCrates.join("");
}

const partTwo = (input: string[]) => {
  const stacks: Map<string, string[]> = new Map();
  let currentRow = 0;
  while (input[currentRow].indexOf("[") > -1) {
    const row = input[currentRow];
    for (let i = 1; i < row.length; i += 4) {
      const currentCrate = row[i];
      if (currentCrate !== " ") {
        const stackNumber = `${((i - 1) / 4) + 1}`;
        if (!stacks.get(stackNumber)) {
          stacks.set(stackNumber, []);
        }
        stacks.get(stackNumber)?.push(currentCrate);
      }
    }
    currentRow++;
  }
  currentRow += 2;

  while (input[currentRow]) {
    let step = input[currentRow].replace(/\s/g, "");
    const [restTo, to] = step.split("to");
    const [restFrom, from] = restTo.split("from");
    const move = parseInt(restFrom.split("move")[1]);
    const movedCrates = stacks.get(from)?.splice(0, move) || [];
    const alteredStack = [...movedCrates, ...stacks.get(to) || []]
    stacks.set(to, alteredStack);
    currentRow++;
  }

  const neededCrates: string[] = [];
  let currentStack = 1;
  while (stacks.get(`${currentStack}`)) {
    neededCrates.push(stacks.get(`${currentStack}`)?.[0] || "");
    currentStack++;
  }
  return neededCrates.join("");
}

console.log("====== PART 1 ======")
console.log("Result: ", partOne(inputArray));
console.log("====== PART 2 ======")
console.log("Result: ", partTwo(inputArray));