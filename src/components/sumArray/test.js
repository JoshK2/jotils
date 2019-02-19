import assert from "assert";
import sumArray from "./";

describe("sumArray", function() {
  it("return the sum in array of numbers", () => {
    const result = sumArray([1, 2, 3]);
    assert(result === 6);
  });
});
