import React from 'react';
import classes from './game.module.css';
import Board from './board/board';
export default function game(props: any) {
  return (
    <div className={classes.game}>
      <Board />
      <Board />
    </div>
  );
}
