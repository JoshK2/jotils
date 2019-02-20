import assert from "assert";
import getLongestWord from "./get-longest-word";

describe("getLongestWord", function() {
  it("check return the longest word", () => {
    assert(getLongestWord("abc abcd abcde") === "abcde");
  });
});
