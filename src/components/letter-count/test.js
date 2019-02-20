import assert from "assert";
import letterCount from "./";

const str = "abcd";

describe("letterCount", function() {
  it("return the number of time that character appears in a string", () => {
    const result = letterCount(str, "a");
    assert(result === 1);
  });
  it("return the number of time that character appears in a string with no casesensitive", () => {
    const result = letterCount(str, "A", true);
    assert(result === 1);
  });
  it("return the number of time that character appears in a string with casesensitive", () => {
    const result = letterCount(str, "A", false);
    assert(result === 0);
  });
});
