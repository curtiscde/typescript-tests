import { multiply } from "./multiply";

describe.skip('multiply', () => {
  it.each([
    [5, 5, 25],
    [15, 4, 60],
    [6, 2, 12],
  ])('multiply %d and %d numbers together', (x, y, expected) => {
    expect(multiply(x, y)).toEqual(expected);
  })
});
