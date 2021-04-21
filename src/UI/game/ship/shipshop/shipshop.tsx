import React from 'react';
import classes from './shipshop.module.css';
import { connect } from 'react-redux';
import { RootState } from '../../../../type';
import Cell from '../cell';
import { turnShip } from '../../../../store/actionCreators';
import { AppDispatch } from '../../../../app/store';

type props = {
  shop: Array<{ length: number; direction: 'v' | 'h' }>;
  turn(index: number): void;
};
function shipshop(props: props) {
  return (
    <div className={classes.shipshop}>
      {props.shop.map((el, index) => {
        let ship: JSX.Element[] = [];
        for (let i = 0; i < el.length; i++) {
          ship.push(
            <div key={index + i} className={classes.shipCell}>
              <Cell status="alive" />
            </div>
          );
        }
        return (
          <div
            style={
              props.shop[index].direction === 'h'
                ? { flexDirection: 'row' }
                : { flexDirection: 'column' }
            }
            key={index}
            draggable={true}
            className={classes.ship}
            onClick={() => props.turn(index)}
          >
            {ship}
          </div>
        );
      })}
    </div>
  );
}
const mapStateToProps = (state: RootState) => {
  return {
    shop: state.board1.shop,
  };
};

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    turn: (index: number) => dispatch(turnShip(index)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(shipshop);
