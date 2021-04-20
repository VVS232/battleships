import react from 'react';
import missed from '../../imgs/missed.png';
import hit from '../../imgs/hit.png';
import sunk from '../../imgs/sunk.png';
import alive from '../../imgs/alive.png';

type props = {
  dataRow?: number;
  dataCol?: number;
};
function cell(props: props) {
  return (
    <img src={alive} alt="" data-row={props.dataRow} data-col={props.dataCol} />
  );
}
export default cell;
