import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import PuzzleLink from './PuzzleLink';
import { baseURL, config } from '../services';
import LoadingScreen from './LoadingScreen';
import Footer from './Footer';
import '../css/Home.css';

export default function Home(props) {
const [puzzles, setPuzzles] = useState([]);

const [isLoading, setIsLoading] = useState(true);

const getRating = (puzzle) => {
  if (puzzle.fields.rating) {
  let ratingsArray = puzzle.fields.rating.split('');
    let ratingsSum = ratingsArray.reduce((total, num) => {
      return parseInt(total) + parseInt(num);
    });
    return ratingsSum/ratingsArray.length;
  } else {
    return 0;
  }
}

useEffect(() => {
  const getPuzzles = async() => {
    const res = await axios.get(baseURL, config);
    setIsLoading(false);
    setPuzzles(res.data.records);
  }
  getPuzzles();
}, [props.toggleFetch]);
  
  return (
    <div className="Home">
      <LoadingScreen isLoading={isLoading}>
        <div className="HomeGrid">
          {puzzles.sort((a, b) => new Date(b.createdTime) - new Date(a.createdTime)).reverse().map((puzzle) => (
            <PuzzleLink key={puzzle.fields.name} puzzle={puzzle} rating={getRating(puzzle)}/>
            ))}
          <Link to="/new-puzzle">
            <button className="NewPuzzleLink">
            +
            </button>
          </Link>
        </div>
        <Footer/>
      </LoadingScreen>
    </div>
  )
}