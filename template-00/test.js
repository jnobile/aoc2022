import { strictEqual } from "assert";
import { getInput, getExampleInput, getPartOneSolution, getPartTwoSolution } from "./input.js";
import { partOne, partTwo } from "./solution.js";

let input = getInput();

describe("Name", () => {
    it("part one: ", () => {
      strictEqual(partOne(input), getPartOneSolution());
    });

    it("part two: ", () => {
      strictEqual(partTwo(input), getPartTwoSolution());
    });
  });
