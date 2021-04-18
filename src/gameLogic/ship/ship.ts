class Ship {
  public parts: boolean[];
  public row: keyof grid;
  public column: keyof grid;
  constructor(
    public length: number,
    public head: [keyof grid, keyof grid],
    public direction: 'v' | 'h'
  ) {
    this.length = length;
    this.parts = Array(this.length).fill(false);
    [this.row, this.column] = head;
    this.direction = direction;
  }
  hit(this: Ship, part: number) {
    this.parts[part - 1] = true;
  }
  isSunk() {
    return this.parts.every((part) => (part === true ? true : false));
  }
}
export default Ship;

type grid = {
  1: ('empty' | [Ship, number | 'hit' | 'sunk'])[];
  2: ('empty' | [Ship, number | 'hit' | 'sunk'])[];
  3: ('empty' | [Ship, number | 'hit' | 'sunk'])[];
  4: ('empty' | [Ship, number | 'hit' | 'sunk'])[];
  5: ('empty' | [Ship, number | 'hit' | 'sunk'])[];
  6: ('empty' | [Ship, number | 'hit' | 'sunk'])[];
  7: ('empty' | [Ship, number | 'hit' | 'sunk'])[];
  8: ('empty' | [Ship, number | 'hit' | 'sunk'])[];
  9: ('empty' | [Ship, number | 'hit' | 'sunk'])[];
  10: ('empty' | [Ship, number | 'hit' | 'sunk'])[];
};
