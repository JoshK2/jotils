import assert from "assert";
import {shuffleArray} from "./shuffle-array";

describe("shuffleArray", function() {
  it("return shuffle array", () => {
    const result = shuffleArray([1, 2, 3]);
    assert(
      result.length === 3 &&
        result.includes(1) &&
        result.includes(2) &&
        result.includes(3)
    );
  });
});
