import assert from "assert";
import includes from "./includes";

describe("includes", function() {
  it("return true when value is include in array", () => {
    const result = includes([1, 2, 3], 1);
    assert(result === true);
  });
  it("return false when value is not include in array", () => {
    const result = includes([1, 2, 3], 4);
    assert(result === false);
  });
});
