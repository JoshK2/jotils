import assert from "assert";
import { isObject } from "./is-object";

describe("isObject", function() {
  it("check is object with number", () => {
    assert(isObject(1) === false);
  });
  it("check is object with string", () => {
    assert(isObject("1") === false);
  });
  it("check is object with array", () => {
    assert(isObject([]) === false);
  });
  it("check is object with object", () => {
    assert(isObject({}) === true);
  });
});
