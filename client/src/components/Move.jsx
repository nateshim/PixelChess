import {pieceSVG} from '../services';

function Move(props) {
  return (
    <div className="Move">
      {pieceSVG[props.move.piece.color.concat(props.move.piece.type.toUpperCase())]}
      <p>From: {props.move.from}</p>
      <p>To: {props.move.to}</p>
    </div>
  );
};

export default Move;