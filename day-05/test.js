import { strictEqual } from "assert";
import { getInput, getPartOneSolution, getPartTwoSolution } from "./input.js";
import { partOne, partTwo } from "./solution.js";

let input = getInput();

describe("Supply Stacks", () => {
    it("part one: top crate from each stack with CrateMover 9000", () => {
      strictEqual(partOne(input), getPartOneSolution());
    });

    it("part two: top crate from each stack with CrateMover 9001", () => {
      strictEqual(partTwo(input), getPartTwoSolution());
    });
  });
