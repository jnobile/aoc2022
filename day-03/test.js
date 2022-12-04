import { strictEqual } from "assert";
import { getInput, getPartOneSolution, getPartTwoSolution } from "./input.js";
import { partOne, partTwo } from "./solution.js";

let input = getInput();

describe("Rucksack Reorganization", () => {
    it("part one: sum of priorities of common item types", () => {
      strictEqual(partOne(input), getPartOneSolution());
    });

    it("part two: ", () => {
      strictEqual(partTwo(input), getPartTwoSolution());
    });
  });
