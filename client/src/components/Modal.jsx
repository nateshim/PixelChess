import {Link, useHistory} from 'react-router-dom';

function Modal(props) {
  const history = useHistory();
  return (
    <div>
      {props.showModal ? 
        <div className="Modal">
          <div className="ModalScreen">
            <p className="ModalTitle">You win!</p>
            <div className="ModalButtonsContainer">
              <Link to="/">
                <button className="ModalButton">Back Home</button>
              </Link>
              <Link onClick={() => {history.go(0)}}>
                <button className="ModalButton">Play Again</button>
              </Link>
            </div>
          </div>
        </div>
        :
        <div>
        </div>
      }
    </div>
  );
};

export default Modal;