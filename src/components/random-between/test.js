import assert from "assert";
import { randomBetween } from "./random-between";

describe("randomBetween", function() {
  it("return random number between min and max parameters", () => {
    const result = randomBetween(10, 15);
    assert(result >= 10 && result <= 15);
  });
});
