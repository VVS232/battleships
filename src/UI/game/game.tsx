import React, { ReactNode } from 'react';
import classes from './game.module.css';
import Board from './board/board';
import { connect } from 'react-redux';

import { board, RootState } from '../../type';

interface props {
  board1: board;
  board2: board;
  children?: ReactNode;
}

function game(props: props) {
  return (
    <div className={classes.game}>
      <Board board={props.board1} />
      <Board board={props.board2} />
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return { board1: state.board1, board2: state.board2 };
};

export default connect(mapStateToProps)(game);
