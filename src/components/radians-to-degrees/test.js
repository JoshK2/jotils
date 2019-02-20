import assert from "assert";
import radiansToDegrees from "./radians-to-degrees";

describe("radiansToDegrees", function() {
  it("Converts Pi radians to 180 degrees", () => {
    const result = radiansToDegrees(Math.PI);
    assert(result === 180);
  });
});
