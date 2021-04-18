import react from 'react';
import classes from './board.module.css';
import Ship from '../ship/ship';
import { board, grid } from '../../../type';

type props = {
  board: board;
};
function Board(props: props) {
  function createGrid() {
    let boardgrid: JSX.Element[] = [];
    for (let key in props.board.grid) {
      let gridKey = Number(key) as keyof grid;
      props.board.grid[gridKey].forEach((el, index) => {
        boardgrid.push(
          <div key={`${gridKey}-${index}`} className={classes.gridEl}>
            <Ship dataRow={gridKey} dataCol={index} />
          </div>
        );
      });
    }
    return boardgrid;
  }
  return <div className={classes.board}>{createGrid().map((el) => el)}</div>;
}

export default Board;
