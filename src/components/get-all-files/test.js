import assert from "assert";
import getAllFiles from "./get-all-files";

const currentPath = process.cwd();

describe("getAllFiles", function() {
  it("return array of files path inside directory", () => {
    const result = getAllFiles(`${currentPath}/src/components/getAllFiles`);
    assert(
      result.length === 2 &&
        result[0] === `${currentPath}/src/components/getAllFiles/index.js` &&
        result[1] === `${currentPath}/src/components/getAllFiles/test.js`
    );
  });
});
