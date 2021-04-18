import Ship from './ship';
let ship: Ship;
beforeEach(() => {
  ship = new Ship(4, [1, 1], 'v');
  return ship;
});
test('creates ship with given length', () => {
  let ship = new Ship(2, [1, 1], 'v');
  expect(ship.length).toBe(2);
});

test('creates array with given length and with false values', () => {
  expect(ship.parts).toStrictEqual([false, false, false, false]);
});

test('mark given spot as hit', () => {
  ship.hit(3);
  expect(ship.parts).toStrictEqual([false, false, true, false]);
});
test('ship sinks', () => {
  ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  ship.hit(4);
  expect(ship.parts).toStrictEqual([true, true, true, true]);
  expect(ship.isSunk()).toBe(true);
});
