import React from 'react';
import classes from './shipshop.module.css';
import { connect } from 'react-redux';
import { RootState } from '../../../../type';
import Cell from '../cell';

type props = {
  shop: Array<{ length: number; direction: 'v' | 'h' }>;
};
function shipshop(props: props) {
  return (
    <div className={classes.shipshop}>
      {props.shop.map((el, index) => {
        let ship: JSX.Element[] = [];
        for (let i = 0; i < el.length; i++) {
          ship.push(
            <div key={index + i} className={classes.shipCell}>
              <Cell />
            </div>
          );
        }
        return <div>{ship}</div>;
      })}
    </div>
  );
}
const mapStateToProps = (state: RootState) => {
  return {
    shop: state.board1.shop,
  };
};

export default connect(mapStateToProps)(shipshop);
