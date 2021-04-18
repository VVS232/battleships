import react from 'react';
import missed from '../../imgs/missed.png';
import hit from '../../imgs/hit.png';
import sunk from '../../imgs/sunk.png';
type props = {
  dataRow: number;
  dataCol: number;
};
function ship(props: props) {
  return (
    <img src="" alt="" data-row={props.dataRow} data-col={props.dataCol} />
  );
}
export default ship;
