import assert from "assert";
import {removeDuplicatesInArray} from "./remove-duplicates-in-array";

describe("removeDuplicatesInArray", function() {
  it("return an array without duplicates value, number type", () => {
    const result = removeDuplicatesInArray([1, 2, 3, 1, 3]);
    assert(result.sort().toString() === [1, 2, 3].sort().toString());
  });
  it("return an array without duplicates value, string type", () => {
    const result = removeDuplicatesInArray(["1", "2", "3", "1", "3"]);
    assert(result.sort().toString() === ["1", "2", "3"].sort().toString());
  });
});
