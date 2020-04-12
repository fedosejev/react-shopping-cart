const {
  calculateTotalPrice,
  calculateTotalToPay,
  calculateTotalNumberOfItems,
} = require("./business");

describe("calculateTotalPrice", () => {
  it("calculates total price for item", () => {
    expect(
      calculateTotalPrice({
        price: 2.99,
        quantity: 1,
      })
    ).toBe(2.99);

    expect(
      calculateTotalPrice({
        price: 1.99,
        quantity: 2,
      })
    ).toBe(3.98);

    expect(
      calculateTotalPrice({
        price: 3.99,
        quantity: 3,
      })
    ).toBe(11.97);

    expect(
      calculateTotalPrice({
        price: 3.99,
        quantity: 0,
      })
    ).toBe(0);

    expect(
      calculateTotalPrice({
        price: 0.0,
        quantity: 5,
      })
    ).toBe(0);
  });
});

describe("calculateTotalToPay", () => {
  it("calculates total to pay for all items", () => {
    expect(
      calculateTotalToPay([
        {
          price: 2.99,
          quantity: 1,
        },
        {
          price: 1.99,
          quantity: 2,
        },
        {
          price: 3.99,
          quantity: 3,
        },
      ])
    ).toBe(18.94);
  });
});

describe("calculateTotalNumberOfItems", () => {
  it("calculates total number of all items", () => {
    expect(
      calculateTotalNumberOfItems([
        {
          price: 2.99,
          quantity: 1,
        },
        {
          price: 1.99,
          quantity: 2,
        },
        {
          price: 3.99,
          quantity: 3,
        },
      ])
    ).toBe(6);

    expect(calculateTotalNumberOfItems([])).toBe(0);
  });
});
