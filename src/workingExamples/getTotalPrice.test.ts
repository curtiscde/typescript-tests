import { getTotalPrice } from "./getTotalPrice";

describe('getTotalPrice', () => {
  it('should add item prices together', () => {
    const items = [
      {
        name: 'foo',
        price: 2,
        quantity: 1
      },
      {
        name: 'bar',
        price: 3,
        quantity: 1
      },
      {
        name: 'baz',
        price: 1,
        quantity: 1
      }
    ]

    expect(getTotalPrice(items)).toEqual(6)
  });

  it('should consider multiple quantities', () => {
    const items = [
      {
        name: 'foo',
        price: 2,
        quantity: 2
      },
      {
        name: 'bar',
        price: 3,
        quantity: 5
      },
    ]

    expect(getTotalPrice(items)).toEqual(19)
  });
});
