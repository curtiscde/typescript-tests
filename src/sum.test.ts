import { sum } from "./sum";

describe.skip('sum', () => {
  it('add 2 numbers together correctly', () => {
    expect(sum(1, 2)).toEqual(3);
  })
});