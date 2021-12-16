interface BasketItem {
  name: string;
  price: number;
  quantity: number;
};

export function getTotalPrice(basketItems: Array<BasketItem>): number {
  return basketItems.reduce((prev, curr) => {
    return prev + (curr.price * curr.quantity);
  }, 0);
};
