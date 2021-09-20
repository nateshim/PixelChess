import {Link} from 'react-router-dom';

export default function PuzzleLink(props) {
  return (
      <Link key={props.puzzle.fields.name} to={`/puzzle/${props.puzzle.id}`}>
        <button className="Link">
          <p>{props.puzzle.fields.name}</p>
          <p>{props.puzzle.fields.author}</p>
        </button>
      </Link>
  );
};