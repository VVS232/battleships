import react from 'react';
import classes from './board.module.css';
import Ship from '../ship/ship';
export default function board() {
  function createGrid() {
    let grid: JSX.Element[] = [];
    for (let i = 1; i < 11; i++) {
      for (let j = 0; j < 10; j++) {
        grid.push(
          <div key={`${i}-${j}`} className={classes.gridEl}>
            <Ship dataRow={i} dataCol={j} />
          </div>
        );
      }
    }
    return grid;
  }
  return <div className={classes.board}>{createGrid().map((el) => el)}</div>;
}
