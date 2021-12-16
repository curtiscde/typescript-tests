interface BasketItem {
  name: string;
  price: number;
  quantity: number;
};

export function getTotalPrice(basketItems: Array<BasketItem>): number {
  return 0;
};
