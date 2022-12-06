import { strictEqual } from "assert";
import { getInput, getPartOneSolution, getPartTwoSolution } from "./input.js";
import { partOne } from "./solution.js";

let input = getInput();

describe("Tuning Trouble", () => {
    it("part one: characters before start-of-packet marker begins", () => {
      strictEqual(partOne(input, 4), getPartOneSolution());
    });

    it("part two: characters before start-of-message marker begins", () => {
      strictEqual(partOne(input, 14), getPartTwoSolution());
    });
  });
