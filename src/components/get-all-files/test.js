import assert from "assert";
import { getAllFiles } from "./get-all-files";

const currentPath = process.cwd();
//console.log(currentPath);

console.log(
  getAllFiles(`${currentPath}/src/components/get-all-files/testhelp`)
);

describe("getAllFiles", function() {
  it("return array of files path inside directory", () => {
    const result = getAllFiles(
      `${currentPath}/src/components/get-all-files/testhelp`
    );
    assert(
      result.length === 2 &&
        result[0] ===
          `${currentPath}/src/components/get-all-files/testhelp/file1.js` &&
        result[1] ===
          `${currentPath}/src/components/get-all-files/testhelp/file2.js`
    );
  });
});
