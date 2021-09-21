import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import PuzzleLink from './PuzzleLink';
import { baseURL, config } from '../services';
import Footer from './Footer';
import '../css/Home.css';

export default function Home(props) {
const [puzzles, setPuzzles] = useState([]);

useEffect(() => {
  const getPuzzles = async() => {
    const res = await axios.get(baseURL, config);
    console.log(res.data.records);
    setPuzzles(res.data.records);
  }
  getPuzzles();
}, [props.toggleFetch]);
  
  return (
    <div className="Home">
      <div className="HomeGrid">
        {puzzles.sort((a, b) => new Date(b.createdTime) - new Date(a.createdTime)).reverse().map((puzzle) => (
          <PuzzleLink key={puzzle.fields.name} puzzle={puzzle}/>
          ))}
        <Link to="/new-puzzle">
          <button className="Link">
          +
          </button>
        </Link>
      </div>
      <Footer/>
    </div>
  )
}