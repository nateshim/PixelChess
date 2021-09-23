import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import axios from 'axios';
import {baseURL, config} from '../services';
import "../css/Modal.css";

function Modal(props) {
  const [hideRating, setHideRating] = useState(false);
  const history = useHistory();

  const handleRating = (e) => {
    const postRating = async() => {
      setHideRating(true);
      const res = await axios.get(`${baseURL}/${props.id}`,config);
      const resRating = res.data.fields.rating;
      await axios.patch(`${baseURL}/${props.id}`, {fields: {rating: 
        resRating ? resRating.concat(e.toString()) : e.toString()
      }}, config)
    }
    postRating();
  }
  return (
    <div>
      {props.showModal ? 
        <div className="Modal">
          <div className="ModalScreen">
            <p className="ModalTitle">You win!</p>
            {hideRating ? 
              <div className="RatingMessage">Thanks!</div>
              :
              <ReactStars
              count={5}
              onChange={handleRating}
              onClick={handleRating}
              size={30}
              activeColor="#ffcc40"
              />
            }
            <div className="ModalButtonsContainer">
              <Link to="/">
                <button className="ModalButton">Back Home</button>
              </Link>
              <Link className="ModalLink" onClick={() => {history.go(0)}}>
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