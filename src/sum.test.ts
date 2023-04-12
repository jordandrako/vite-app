import { sum } from "./sum";

describe("sum", () => {
  it("returns the sum of two positive integers", () => {
    expect(sum(3, 5)).toEqual(8);
  });

  it("returns the sum of multiple positive integers", () => {
    expect(sum(1, 2, 3, 4, 5)).toEqual(15);
  });

  it("returns the sum of negative and positive integers", () => {
    expect(sum(-3, 5, 8, -10)).toEqual(0);
  });

  it("returns 0 when no arguments are provided", () => {
    expect(sum()).toEqual(0);
  });

  it("returns the correct sum of floating-point numbers", () => {
    expect(sum(1.5, 2.1, 3.7)).toBeCloseTo(7.3);
  });
});
