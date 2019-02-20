import assert from "assert";
import { isUndefined } from "./is-undefined";

const a = 1;
const obj = {};

describe("isUndefined", function() {
  it("check is undefined with defined value", () => {
    assert(isUndefined(a) === false);
  });
  it("check is undefined with undefined value", () => {
    assert(isUndefined(obj.not_defined) === true);
  });
});
