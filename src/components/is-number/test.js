import assert from "assert";
import isNumber from "./";

describe("isNumber", function() {
  it("check is number with number", () => {
    assert(isNumber(1) === true);
  });
  it("check is number with string", () => {
    assert(isNumber("1") === false);
  });
  it("check is number with double", () => {
    assert(isNumber(1.2) === true);
  });
  it("check is number with double in string", () => {
    assert(isNumber("1.2") === false);
  });
});
