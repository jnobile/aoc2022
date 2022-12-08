import { strictEqual } from "assert";
import { getInput, getExampleInput, getPartOneSolution, getPartTwoSolution } from "./input.js";
import { partOne, partTwo } from "./solution.js";

let input = getInput();

describe("Treetop Tree House", () => {
    it("part one: trees visible from outside forest", () => {
      strictEqual(partOne(input), getPartOneSolution());
    });

    it("part two: highest tree visibility score", () => {
      strictEqual(partTwo(input), getPartTwoSolution());
    });
  });
