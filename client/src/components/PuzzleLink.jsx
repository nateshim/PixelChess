import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

export default function PuzzleLink(props) {
  const [puzzleRating, setPuzzleRating] = useState(0);
  useEffect(() => {
    //get rating
    let ratingsArray = props.puzzle.fields.rating.split(',');
    let ratingsSum = ratingsArray.reduce((total, num) => {
      return parseInt(total) + parseInt(num);
    });
    setPuzzleRating(ratingsSum/ratingsArray.length);
  }, []);
  return (
      <Link key={props.puzzle.fields.name} to={`/puzzle/${props.puzzle.id}`} style={{textDecoration: 'none'}}>
        <button className="Link">
          <div className="PuzzleLinkText">{props.puzzle.fields.name}</div>
          <div className="PuzzleLinkText">{props.puzzle.fields.author}</div>
          <ReactStars
            count={5}
            edit={false}
            size={20}
            value={puzzleRating}
          />
        </button>
      </Link>
  );
};