import { orderList } from "./orderList";

describe('orderList', () => {
  const names: Array<string> = [
    'Bulbasaur',
    'Ivysaur',
    'Venusaur',
    'Charmander',
    'Charmeleon',
    'Charizard',
    'Squirtle',
    'Wartortle',
    'Blastoise',
    'Caterpie',
  ];

  it('should return names in alphabetical order', () => {
    expect(orderList(names)).toEqual(
      'Blastoise, Bulbasaur, Caterpie, Charizard, Charmander, Charmeleon, Ivysaur, Squirtle, Venusaur, Wartortle'
    )
  });

  it('should return names in reverse alphabetical order', () => {
    expect(orderList(names, { reverseOrder: true })).toEqual(
      'Wartortle, Venusaur, Squirtle, Ivysaur, Charmeleon, Charmander, Charizard, Caterpie, Bulbasaur, Blastoise'
    )
  });
});
