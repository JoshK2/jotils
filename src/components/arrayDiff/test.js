import assert from "assert";
import arrayDiff from "./";

describe("arrayDiff", function() {
  it("check with two array", () => {
    assert.deepEqual(arrayDiff(["a", "b"], ["a", "b", "c", "d"]), ["c", "d"]);
  });
  it("check with two string", () => {
    assert.deepEqual(arrayDiff("abcd", "abcde"), ["e"]);
  });
  it("check with two equal string", () => {
    assert.deepEqual(arrayDiff("zxc", "zxc"), []);
  });
});
