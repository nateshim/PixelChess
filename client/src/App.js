import {useState} from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import NewPuzzleForm from './components/NewPuzzleForm';
import Puzzle from './components/Puzzle';
import './App.css';
import NewPuzzle from './components/NewPuzzle';


function App() {
  
  const [toggleFetch, setToggleFetch] = useState(false);
  
  return (
    <div className="App">
      <Route exact path="/">
        <Home toggleFetch={toggleFetch}/>
      </Route>
      <Route path="/puzzle/:id">
        <Puzzle/>
      </Route>
      <Route path="/new-puzzle">
        <NewPuzzle setToggleFetch={setToggleFetch}/>
      </Route>
    </div>
  );
}

export default App;
