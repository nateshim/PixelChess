import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { baseURL, config } from '../services';
import '../css/NewPuzzleForm.css';

export default function NewPuzzleForm(props) {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [initialBoardState, setInitialBoardState] = useState('');
  const [numMoves, setNumMoves] = useState(0);
  const [moves, setMoves] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPuzzle = {
      name,
      author,
      initialBoardState,
      numMoves,
      moves
    }
    await axios.post(baseURL, {fields: newPuzzle}, config);
    props.setToggleFetch((curr) => curr = !curr);
    history.push("/");
  }

  return (
    <form className="NewPuzzleForm" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <label htmlFor="author">Author</label>
      <input id="author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
      <label htmlFor="initialBoardState">Initial Board State (FEN)</label>
      <input type="text" id="initialBoardState" value={initialBoardState} onChange={(e) => setInitialBoardState(e.target.value)}/>
      <label htmlFor="numMoves">Number of Moves</label>
      <input type="number" id="numMoves" value={numMoves} onChange={(e) => setNumMoves(e.target.valueAsNumber)}/>
      <label htmlFor="moves">Moves (SAN)</label>
      <input type="text" id="moves" value={moves} onChange={(e) => setMoves(e.target.value)}/>
      <button type="submit">Publish Puzzle!</button>
    </form>
  );
};