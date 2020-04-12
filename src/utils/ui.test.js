const { formatPrice, concatenateClassNames } = require("./ui");

describe("formatPrice", () => {
  it("converts number into string with two digits after floating point", () => {
    expect(formatPrice(12.3)).toBe("12.30");
  });
});

describe("concatenateClassNames", () => {
  it("concatenates base class name string with custom class name string", () => {
    expect(
      concatenateClassNames({
        baseClassName: "btn",
        customClassName: "btn-outline-secondary",
      })
    ).toBe("btn btn-outline-secondary");
  });
});
