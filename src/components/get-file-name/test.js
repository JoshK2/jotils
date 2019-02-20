import assert from "assert";
import getFileName from "./get-file-name";

describe("getFileName", function() {
  it("check javascript file", () => {
    const result = getFileName(`/example/components/test/index.js`);
    assert(result === "index.js");
  });
  it("check txt file with letter and number", () => {
    const result = getFileName(`/example/components/test/480dfln.txt`);
    assert(result === "480dfln.txt");
  });
  it("check json file when path include file name", () => {
    const result = getFileName(
      `/example/components/test/480dfln.txt/example/components/test/test.json`
    );
    assert(result === "test.json");
  });
});
