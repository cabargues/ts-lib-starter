import { sum, multiply } from "./math";

describe("sum", () => {
  test("should sum 2 number", () => {
    const result = sum(1, 2);

    expect(result).toEqual(3);
  });
});

describe("multipy", () => {
  test("should multipy 2 number", () => {
    const result = multiply(2, 2);

    expect(result).toEqual(4);
  });
});
