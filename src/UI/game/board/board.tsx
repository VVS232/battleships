import React, { ReactNode } from 'react';
import classes from './board.module.css';
import Cell from '../ship/cell';
import { board, grid, RootState } from '../../../type';
import { connect } from 'react-redux';
import { shoot } from '../../../store/actionCreators';
import { AppDispatch } from '../../../app/store';

type props = {
  board: board;
  children?: ReactNode;
  shoot(position: [keyof grid, keyof grid]): void;
};
function Board(props: props) {
  function createGrid() {
    let boardgrid: JSX.Element[] = [];
    for (let key in props.board.grid) {
      let gridKey = Number(key) as keyof grid;
      props.board.grid[gridKey].forEach((el, index) => {
        let status =
          typeof el === 'string'
            ? el === 'empty'
              ? 'empty'
              : 'missed'
            : typeof el[1] === 'number'
            ? 'alive'
            : el[1];
        boardgrid.push(
          <div
            key={`${gridKey}-${index}`}
            onClick={() => props.shoot([gridKey, index as keyof grid])}
            className={classes.gridEl}
          >
            <Cell dataRow={gridKey} dataCol={index} status={status} />
          </div>
        );
      });
    }
    return boardgrid;
  }
  return (
    <div className={classes.board}>
      {createGrid().map((el) => el)}
      <div>{props.children}</div>
    </div>
  );
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    shoot: (position: [keyof grid, keyof grid]) => dispatch(shoot(position)),
  };
}
export default connect(null, mapDispatchToProps)(Board);
