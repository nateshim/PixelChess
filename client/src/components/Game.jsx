import { useState } from 'react';
import Chessboard from 'chessboardjsx';
import Chess from 'chess.js';
import { chessConfig, customPieces } from '../services';
import LightSquare from '../assets/LightSquare.png';
import DarkSquare from '../assets/DarkSquare.png';

export default function Game() {
  const [chess] = useState(
    new Chess(chessConfig)
  );

  const [fen, setFen] = useState(chess.fen());

  const handleMove = (move) => {
    if (chess.move(move)) {
      setTimeout(() => {
        const moves = chess.moves();

        if (moves.length > 0) {
          const computerMove = moves[Math.floor(Math.random() * moves.length)];
          chess.move(computerMove);
          setFen(chess.fen());
        }
      }, 300);

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
        lightSquareStyle={
          {backgroundImage: `url(${LightSquare})`}
        }
        darkSquareStyle={
          {backgroundImage: `url(${DarkSquare})`}
        }
        pieces={customPieces}
        />
  )
}