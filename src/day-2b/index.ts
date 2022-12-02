import { readFileSync } from "fs";
import { resolve } from "path";

const filePath = resolve(__dirname, "input.txt").replace("dist", "src");
const holidaysData = readFileSync(filePath).toString().split(";");
const [year, holidaysRaw] = holidaysData;
const holidays = holidaysRaw.split(",");

const EXTRA_HOURS_PER_HOLIDAY = 2;
const WORKING_DAYS = [1, 2, 3, 4, 5];

const partOne = (year: string, holidays: string[]) => {
  let totalExtraHours = 0;
  for (let holiday of holidays) {
    const date = new Date(`${holiday}/${year}`);
    const isWorkingDay = WORKING_DAYS.includes(date.getDay());
    totalExtraHours += isWorkingDay ? EXTRA_HOURS_PER_HOLIDAY : 0;
  }
  return totalExtraHours;
}

console.log("====== PART 1 ======")
console.log("Result: ", partOne(year, holidays));