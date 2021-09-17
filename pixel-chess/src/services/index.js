import LightPawn from '../assets/pieces/Light/LightPawn.png';
import LightBishop from '../assets/pieces/Light/LightBishop.png';
import LightKnight from '../assets/pieces/Light/LightKnight.png';
import LightRook from '../assets/pieces/Light/LightRook.png';
import LightQueen from '../assets/pieces/Light/LightQueen.png';
import LightKing from '../assets/pieces/Light/LightKing.png';
import DarkPawn from '../assets/pieces/Dark/DarkPawn.png';
import DarkBishop from '../assets/pieces/Dark/DarkBishop.png';
import DarkKnight from '../assets/pieces/Dark/DarkKnight.png';
import DarkRook from '../assets/pieces/Dark/DarkRook.png';
import DarkQueen from '../assets/pieces/Dark/DarkQueen.png';
import DarkKing from '../assets/pieces/Dark/DarkKing.png';

export const chessConfig = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
export const customPieces = {
  wP: () => (
    <img
      style={{
        imageRendering: 'pixelated',
        imageRendering: '-moz-crisp-edges',
        imageRendering: 'crisp-edges',
      }}
      src={LightPawn}
      alt={"lightPawn"}
    />
  ),
  wB: () => ( 
    <img
      style={{
        imageRendering: 'pixelated',
        imageRendering: '-moz-crisp-edges',
        imageRendering: 'crisp-edges',
      }}
      src={LightBishop}
      alt={"lightBishop"}
    />
  ),
  wN: () => ( 
    <img
      style={{
        imageRendering: 'pixelated',
        imageRendering: '-moz-crisp-edges',
        imageRendering: 'crisp-edges',
      }}
      src={LightKnight}
      alt={"lightKnight"}
    />
  ),
  wR: () => ( 
    <img
      style={{
        imageRendering: 'pixelated',
        imageRendering: '-moz-crisp-edges',
        imageRendering: 'crisp-edges',
      }}
      src={LightRook}
      alt={"lightRook"}
    />
  ),
  wQ: () => ( 
    <img
      style={{
        imageRendering: 'pixelated',
        imageRendering: '-moz-crisp-edges',
        imageRendering: 'crisp-edges',
      }}
      src={LightQueen}
      alt={"lightQueen"}
    />
  ),
  wK: () => ( 
    <img
      style={{
        imageRendering: 'pixelated',
        imageRendering: '-moz-crisp-edges',
        imageRendering: 'crisp-edges',
      }}
      src={LightKing}
      alt={"lightKing"}
    />
  ),
  bP: () => (
    <img
      style={{
        imageRendering: 'pixelated',
        imageRendering: '-moz-crisp-edges',
        imageRendering: 'crisp-edges',
      }}
      src={DarkPawn}
      alt={"darkPawn"}
    />
  ),
  bB: () => ( 
    <img
      style={{
        imageRendering: 'pixelated',
        imageRendering: '-moz-crisp-edges',
        imageRendering: 'crisp-edges',
      }}
      src={DarkBishop}
      alt={"darkBishop"}
    />
  ),
  bN: () => ( 
    <img
      style={{
        imageRendering: 'pixelated',
        imageRendering: '-moz-crisp-edges',
        imageRendering: 'crisp-edges',
      }}
      src={DarkKnight}
      alt={"darkKnight"}
    />
  ),
  bR: () => ( 
    <img
      style={{
        imageRendering: 'pixelated',
        imageRendering: '-moz-crisp-edges',
        imageRendering: 'crisp-edges',
      }}
      src={DarkRook}
      alt={"darkRook"}
    />
  ),
  bQ: () => ( 
    <img
      style={{
        imageRendering: 'pixelated',
        imageRendering: '-moz-crisp-edges',
        imageRendering: 'crisp-edges',
      }}
      src={DarkQueen}
      alt={"darkQueen"}
    />
  ),
  bK: () => ( 
    <img
      style={{
        imageRendering: 'pixelated',
        imageRendering: '-moz-crisp-edges',
        imageRendering: 'crisp-edges',
      }}
      src={DarkKing}
      alt={"darkKing"}
    />
  )
}