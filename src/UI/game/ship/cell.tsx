import React from 'react';
import missed from '../../imgs/missed.png';
import hit from '../../imgs/hit.png';
import sunk from '../../imgs/sunk.png';
import alive from '../../imgs/alive.png';
import { grid } from '../../../type';

type props = {
  status: string;
  dataRow?: number;
  dataCol?: number;
  onClick?(position: [keyof grid, keyof grid]): void;
};
const shipStatusToImg: { [index: string]: string } = {
  alive: alive,
  missed: missed,
  hit: hit,
  sunk: sunk,
};
function cell(props: props) {
  return (
    <img
      draggable={false}
      src={shipStatusToImg[props.status]}
      alt=""
      data-row={props.dataRow}
      data-col={props.dataCol}
    />
  );
}
export default cell;
