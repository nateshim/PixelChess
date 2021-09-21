import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Chess from 'chess.js';
import { baseURL, config } from '../services';
import NewPuzzleFormInput from './NewPuzzleFormInput';
import '../css/NewPuzzleForm.css';

export default function NewPuzzleForm(props) {
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
    <form className="NewPuzzleForm" onSubmit={handleSubmit}>
      <NewPuzzleFormInput
        id="name"
        type="text"
        title="Name"
        state={name}
        setState={setName}
        hasError={hasNameError}
        errorMessage="name must be 1-12 characters in length"
      />
      <NewPuzzleFormInput
        id="author"
        type="text"
        title="Author"
        state={author}
        setState={setAuthor}
        hasError={hasAuthorError}
        errorMessage="author must be 1-12 characters in length"
      />
      <NewPuzzleFormInput
        id="initialBoard"
        type="text"
        title="Initial Board (FEN)"
        state={initialBoard}
        setState={setInitialBoard}
        hasError={hasInitialBoardError}
        errorMessage="invalid board"
      />
      <NewPuzzleFormInput
        id="numMoves"
        type="number"
        title="Number of Moves"
        state={numMoves}
        setState={setNumMoves}
        hasError={hasNumMovesError}
        errorMessage="please provide a value"
      />
      <NewPuzzleFormInput
        id="moves"
        type="text"
        title="Moves (SAN)"
        state={moves}
        setState={setMoves}
        hasError={hasMovesError}
        errorMessage="incorrect format. make sure that there are no spaces or commmas in between moves"
      />
      <button type="submit">Publish Puzzle!</button>
    </form>
  );
};