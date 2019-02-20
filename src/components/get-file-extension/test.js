import assert from "assert";
import getFileExtension from "./get-file-extension";

const currentPath = process.cwd();

describe("getFileExtension", function() {
  it("check javascript file extension", () => {
    const result = getFileExtension(
      `${currentPath}/src/components/getFileName/index.js`
    );
    assert(result === "js");
  });
  it("check jpg file extension", () => {
    const result = getFileExtension(
      `https://www.example.com/article/image/dog.jpg?param=value#link`
    );
    assert(result === "jpg");
  });
  it("check txt file extension", () => {
    const result = getFileExtension(`/example/components/test/480dfln.txt`);
    assert(result === "txt");
  });
  it("check josn file extension", () => {
    const result = getFileExtension(
      `/example/components/test/480dfln.txt/example/components/test/test.json`
    );
    assert(result === "json");
  });
});
