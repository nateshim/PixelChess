import {Link} from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

export default function PuzzleLink(props) {
  return (
      <Link key={props.puzzle.fields.name} to={`/puzzle/${props.puzzle.id}`} style={{textDecoration: 'none'}}>
        <button className="Link">
          <div className="PuzzleLinkText">{props.puzzle.fields.name}</div>
          <div className="PuzzleLinkText">{props.puzzle.fields.author}</div>
          <ReactStars
            activeColor="#ffcc40"
            count={5}
            edit={false}
            isHalf={true}
            size={25}
            value={props.rating}
          />
          <div className="RatingNumber">({
          props.puzzle.fields.rating ? props.puzzle.fields.rating.length : 0
          })</div>
        </button>
      </Link>
  );
};