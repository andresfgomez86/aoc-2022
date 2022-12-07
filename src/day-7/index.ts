import { readFileSync } from "fs";
import { resolve } from "path";

const filePath = resolve(__dirname, "input.txt").replace("dist", "src");
const inputArray = readFileSync(filePath).toString().split("\n");

const partOne = (input: string[]) => {
  const sizes = new Map<string, number>();
  let currentPath: string[] = [];
  for (let line of input) {
    if (line.includes("$ cd")) {
      const currentFolder = line.split(" ")[2];
      if (currentFolder === "/") {
        currentPath = [];
      }
      if (currentFolder === "..") {
        currentPath.pop();
      } else {
        currentPath.push(currentFolder);
        if (!sizes.has(currentFolder)) {
          sizes.set(currentPath.join("/"), 0);
        }
      }
    } else if (line.split(" ")[0] !== "$" && line.split(" ")[0] !== "dir") {
      const size = parseInt(line.split(" ")[0]);
      for (let i = 0; i < currentPath.length; i++) {
        const folder = currentPath.slice(0, currentPath.length - i).join("/");
        sizes.set(folder, (sizes.get(folder) || 0) + size);
      }
    }
  }
  let sum = 0;
  sizes.forEach(size => {
    if (size < 100000) {
      sum += size
    }
  })
  return sum;
}

const partTwo = (input: string[]) => {
  const sizes = new Map<string, number>();
  let currentPath: string[] = [];
  for (let line of input) {
    if (line.includes("$ cd")) {
      const currentFolder = line.split(" ")[2];
      if (currentFolder === "/") {
        currentPath = [];
      }
      if (currentFolder === "..") {
        currentPath.pop();
      } else {
        currentPath.push(currentFolder);
        if (!sizes.has(currentFolder)) {
          sizes.set(currentPath.join("/"), 0);
        }
      }
    } else if (line.split(" ")[0] !== "$" && line.split(" ")[0] !== "dir") {
      const size = parseInt(line.split(" ")[0]);
      for (let i = 0; i < currentPath.length; i++) {
        const folder = currentPath.slice(0, currentPath.length - i).join("/");
        sizes.set(folder, (sizes.get(folder) || 0) + size);
      }
    }
  }
  const totalSpace = 70000000;
  const neededSpace = 30000000;
  const unused = totalSpace - (sizes.get("/") || 0);
  let smallest = totalSpace;
  sizes.forEach(size => {
    if (size + unused > neededSpace && size <= smallest) {
      smallest = size;
    }
  })
  return smallest;
}

console.log("====== PART 1 ======")
console.log("Result: ", partOne(inputArray));
console.log("====== PART 2 ======")
console.log("Result: ", partTwo(inputArray));