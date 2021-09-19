import { useEffect, useLayoutEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { baseURL, config } from '../services';

export default function Home() {
const [sessionID, setSessionID] = useState('');

const deleteSession = async(id) => {
    console.log(id);
    await axios.delete(`${baseURL}/${id}`, config);
}

const alertUser = (e) => {
  e.preventDefault();
  e.returnValue = "";
  return "";
}

useEffect(() => {
  //onload create session id 
  const newSession = {
    moves: ''
  }

  const createSession = async() => {
    const response = await axios.post(baseURL, {
      fields: newSession
    }, config);
    console.log(response);
    setSessionID(response.data.id);
  }
  createSession();
  window.addEventListener('beforeunload', alertUser);

  return () => {
    console.log(sessionID);
    deleteSession(sessionID);
  }
}, [])
  
  return (
    <div>
      <Link to={`/game/${sessionID}`}>Play</Link>
      <button onClick={deleteSession}>Click</button>
    </div>
  )
}