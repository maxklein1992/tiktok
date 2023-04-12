import { capitalizeFirstLetter } from "./string";

describe("capitalizeFirstLetter()", () => {
  it("should capitalize the first character of a string", async () => {
    expect(capitalizeFirstLetter("house")).toBe("House");
    expect(capitalizeFirstLetter("TEST")).toBe("TEST");
    expect(capitalizeFirstLetter("TEst")).toBe("TEst");
    expect(capitalizeFirstLetter("test test")).toBe("Test test");
    expect(capitalizeFirstLetter(" house   ")).toBe("House");
  });
});
