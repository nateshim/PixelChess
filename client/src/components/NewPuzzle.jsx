import { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import Chess from 'chess.js';
import { baseURL, config } from '../services';
import NewPuzzleForm from './NewPuzzleForm';
import LoadingScreen from './LoadingScreen';
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
  const [isInvalidPuzzle, setIsInvalidPuzzle] = useState(false);

  const isValidPuzzle = () => {
    for (let i = 0; i < numMoves; i++) {
      const currMove = {
        from: moves.slice(i, i+2),
        to: moves.slice(i+2, i+4),
        promotion: 'q'
      };
      chess.move(currMove);
      if (chess.game_over && i !== numMoves-1) return false;
    }
    return chess.game_over() ?  true : false;
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameRegex = /^[a-z]{1,12}$/;
    const authorRegex = /^[a-z]{1,12}$/;
    const numMovesRegex = /^[0-9]{1,45}$/;
    const movesRegex = /[A-Ha-h][1-8][A-Ha-h][1-8]*$/;
    const validInitialBoard = chess.load(initialBoard);
    if (!nameRegex.test(name) || !authorRegex.test(author) || !numMovesRegex.test(numMoves) || !movesRegex.test(moves) || !validInitialBoard) {
      nameRegex.test(name) ? setHasNameError(false) : setHasNameError(true);
      authorRegex.test(author) ? setHasAuthorError(false) : setHasAuthorError(true);
      validInitialBoard ? setHasInitialBoardError(false) : setHasInitialBoardError(true);
      numMovesRegex.test(numMoves) ? setHasNumMovesError(false) : setHasNumMovesError(true);
      movesRegex.test(moves) ? setHasMovesError(false) : setHasMovesError(true);
    } else {
      //test inputs
      setIsLoading(true);
      if (isValidPuzzle()) {
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
      } else {
        setIsLoading(false);
        setIsInvalidPuzzle(true);
        console.log("nope");
      }
    }
  }

  return (
    <div className="NewPuzzleFormContainer">
      <LoadingScreen isLoading={isLoading}>
        <Link className="BackButton" to="/">
          <button>Back</button>
        </Link>
        <NewPuzzleForm 
          className="NewPuzzleForm" 
          setToggleFetch={props.setToggleFetch}
          handleSubmit={handleSubmit} 
          isInvalidPuzzle={isInvalidPuzzle}
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
      </LoadingScreen>
    </div>
  );
};

export default NewPuzzle;