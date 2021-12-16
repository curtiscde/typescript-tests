export function orderList(names: Array<string>, { reverseOrder } = { reverseOrder: false }): string {
  return names.sort((x, y) => {
    const sort = x > y ? 1 : -1;
    return reverseOrder ? sort * -1 : sort;
  }).join(', ')
}