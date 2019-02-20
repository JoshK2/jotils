import assert from "assert";
import {removeValueFromArray} from "./remove-value-from-array";

describe("removeValueFromArray", function() {
  it("return an array after remove value, number type", () => {
    const result = removeValueFromArray([1, 2, 3, 1, 3], 3);
    assert(result.includes(3) === false);
  });
  it("return an array after remove value, string type", () => {
    const result = removeValueFromArray(["1", "2", "3", "1", "3"], "1");
    assert(result.includes("1") === false);
  });
  it("return an array after remove value, bool type", () => {
    const result = removeValueFromArray(
      [true, true, false, false, true],
      false
    );
    assert(result.includes(false) === false);
  });
});
