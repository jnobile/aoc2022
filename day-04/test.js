import { strictEqual } from "assert";
import { getInput, getPartOneSolution, getPartTwoSolution } from "./input.js";
import { partOne, partTwo } from "./solution.js";

let input = getInput();

describe("Camp Cleanup", () => {
    it("part one: assignment pairs where one area is proper subset of another", () => {
      strictEqual(partOne(input), getPartOneSolution());
    });

    it("part two: assignment pairs where ranges overlap", () => {
      strictEqual(partTwo(input), getPartTwoSolution());
    });
  });
