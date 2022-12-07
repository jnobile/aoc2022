import { strictEqual } from "assert";
import { getExampleInput, getInput, getPartOneSolution, getPartTwoSolution } from "./input.js";
import { partOne, partTwo } from "./solution.js";

let input = getInput();

describe("No Space Left On Device", () => {
    it("part one: sum of the total sizes of \"100000\"-sized directories", () => {
      strictEqual(partOne(input), getPartOneSolution());
    });

    it("part two: ", () => {
      strictEqual(partTwo(input), getPartTwoSolution());
    });
  });
