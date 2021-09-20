import {useState} from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import NewPuzzleForm from './components/NewPuzzleForm';
import Puzzle from './components/Puzzle';
import './App.css';


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
        <NewPuzzleForm setToggleFetch={setToggleFetch}/>
      </Route>
    </div>
  );
}

export default App;
