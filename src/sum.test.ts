import { sum } from "./sum";

describe('sum', () => {
  it('add 2 numbers together correctly', () => {
    expect(sum(1, 2)).toEqual(3);
  })
});