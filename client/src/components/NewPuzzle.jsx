import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import Chess from 'chess.js';
import { baseURL, config } from '../services';
import NewPuzzleForm from './NewPuzzleForm';
import Footer from './Footer';
import '../css/NewPuzzle.css';

function NewPuzzle(props) {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [initialBoard, setInitialBoard] = useState('');
  const [numMoves, setNumMoves] = useState(0);
  const [moves, setMoves] = useState('');
  const history = useHistory();

  const [chess] = useState(
    new Chess()
  ); 

  const [hasNameError, setHasNameError] = useState(false);
  const [hasAuthorError, setHasAuthorError] = useState(false);
  const [hasInitialBoardError, setHasInitialBoardError] = useState(false);
  const [hasNumMovesError, setHasNumMovesError] = useState(false);
  const [hasMovesError, setHasMovesError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameRegex = /^[a-z]{1,12}$/;
    const authorRegex = /^[a-z]{1,12}$/;
    const numMovesRegex = /^[0-9]{1,45}$/;
    const movesRegex = /[A-Ha-h][1-8][A-Ha-h][1-8]*$/;
    const validInitialBoard = chess.load(initialBoard);
    nameRegex.test(name) ? setHasNameError(false) : setHasNameError(true);
    authorRegex.test(author) ? setHasAuthorError(false) : setHasAuthorError(true);
    validInitialBoard ? setHasInitialBoardError(false) : setHasInitialBoardError(true);
    numMovesRegex.test(numMoves) ? setHasNumMovesError(false) : setHasNumMovesError(true);
    movesRegex.test(moves) ? setHasMovesError(false) : setHasMovesError(true);
    if (!nameRegex.test(name) || !authorRegex.test(author) || !numMovesRegex.test(numMoves) || !movesRegex.test(moves) || !validInitialBoard) {
    } else {
      //test inputs
      const newPuzzle = {
        name,
        author,
        initialBoard,
        numMoves,
        moves
      }
      await axios.post(baseURL, {fields: newPuzzle}, config);
      props.setToggleFetch((curr) => curr = !curr);
      history.push("/");
    }
  }

  return (
    <div className="NewPuzzleFormContainer">
      {isLoading ?
      <div className="Loading">
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
      </div>
      :
      <div>
        <Link className="BackButton" to="/">
          <button>Back</button>
        </Link>
        <NewPuzzleForm 
          className="NewPuzzleForm" 
          setToggleFetch={props.setToggleFetch}
          handleSubmit={handleSubmit} 
          info={
            {
              name,
              setName,
              hasNameError,
              author,
              setAuthor,
              hasAuthorError,
              initialBoard,
              setInitialBoard,
              hasInitialBoardError,
              numMoves,
              setNumMoves,
              hasNumMovesError,
              moves,
              setMoves,
              hasMovesError
            }
          }
        />
        <Footer/>
      </div>
      }
    </div>
  );
};

export default NewPuzzle;