import React from 'react';
import classes from './header.module.css';
import { Link } from 'react-router-dom';
export default function header(props: any) {
  return (
    <header className={classes.header}>
      <p>Battleship</p>
      <nav>
        <ul>
          <li>
            <Link to="/game">Games</Link>
          </li>
          <li>
            <Link to="/">Rules</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
