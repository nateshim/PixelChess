import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Chessboard from 'chessboardjsx';
import Chess from 'chess.js';
import axios from 'axios';
import { baseURL, config, chessConfig } from '../services';

export default function Puzzle() {
  const [chess] = useState(
    new Chess(chessConfig)
  );

  const [fen, setFen] = useState(chess.fen());
  const [numMoves, setNumMoves] = useState(0);
  const [moves, setMoves] = useState('');
  const params = useParams();

  const getNextMove = () => {
    if (moves.length >= 4) {
      const currMoves = [{
        from: moves.slice(0, 2),
        to: moves.slice(2, 4),
        promotion: 'q',
      }, {
        from: moves.slice(4, 6),
        to: moves.slice(6,8),
        promotion: 'q',
      }];
      setMoves(moves.slice(8));
      return currMoves;
    } else {
      const currMoves = [{
        from: moves.slice(0, 2),
        to: moves.slice(2),
        promotion: 'q'
      }, {}];
      setMoves(moves.slice(4));
      return currMoves;
    }
  } 

  useEffect(() => {
    const getInitialBoardState = async () => {
      const res = await axios.get(`${baseURL}/${params.id}`, config);
      chess.load(res.data.fields.initialBoardState);
      setNumMoves(res.data.fields.numMoves);
      setMoves(res.data.fields.moves);
      setFen(chess.fen());
    }
    getInitialBoardState();
  }, [params.id]);

  const handleMove = (move) => {
    if (chess.move(move)) {
      //check if move equals airtable move
      const [correctMove, enemyMove] = getNextMove();  
      if (correctMove.to !== move.to && correctMove.from !== move.from) {
        chess.undo();
      } else if (correctMove.to === move.to && correctMove.from === move.from) {
        if (numMoves === 1) {
          console.log("You win!");
        } else {
          setTimeout(() => {
            chess.move(enemyMove);
            setNumMoves(numMoves - 1);
            setFen(chess.fen());
          }, 300);
        }
      }
      setFen(chess.fen());
    }
  }
  return (
    <Chessboard
        width={720}
        position={fen}
        onDrop={(move) => handleMove({
          from: move.sourceSquare,
          to: move.targetSquare,
          promotion: 'q',
        })}
        />
  )
}