import {Route} from 'react-router-dom';
import Game from './components/Game';
import Home from './components/Home';
import './App.css';


function App() {
  
  return (
    <div className="App">
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/game/:id">
        <Game/>
      </Route>
    </div>
  );
}

export default App;
