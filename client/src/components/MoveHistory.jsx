import Move from './Move';
import '../css/MoveHistory.css';

function MoveHistory(props) {
  return (
    <div>
      {props.movesTaken ? 
        props.movesTaken.map((move) => (
          <Move move={move}/>
        ))
        :
        (
          <div></div>
        )
      }
    </div>
  );
};

export default MoveHistory;