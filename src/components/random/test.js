import assert from "assert";
import { random } from "./random";

describe("random", function() {
  it("return random number between 0 and 1", () => {
    const result = random();
    assert(result >= 0 && result <= 1);
  });
  it("return random number between 0 and max parameter", () => {
    const result = random(10);
    assert(result >= 0 && result <= 10);
  });
});
