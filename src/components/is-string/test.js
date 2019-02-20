import assert from "assert";
import {isString} from "./is-string";

describe("isString", function() {
  it("check is string with string", () => {
    assert(isString("1") === true);
  });
  it("check is string with array", () => {
    assert(isString([]) === false);
  });
  it("check is string with object", () => {
    assert(isString({}) === false);
  });
  it("check is string with undefined", () => {
    assert(isString(undefined) === false);
  });
  it("check is string with number", () => {
    assert(isString(1) === false);
  });
});
