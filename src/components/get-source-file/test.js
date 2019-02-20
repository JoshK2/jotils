import assert from "assert";
import { getSourceFile } from "./get-source-file";

const currentPath = process.cwd();

describe("getSourceFile", function() {
  it("return data of file", () => {
    const result = getSourceFile(
      `${currentPath}/src/components/get-source-file/test-help.txt`
    );
    assert(result === "text to be returned");
  });
});
