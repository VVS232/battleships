class Ship {
  public parts: boolean[];
  constructor(public length: number) {
    this.length = length;
    this.parts = Array(this.length).fill(false);
  }
  hit(this: Ship, part: number) {
    this.parts[part - 1] = true;
  }
  isSunk() {
    return this.parts.every((part) => (part === true ? true : false));
  }
}
export default Ship;
