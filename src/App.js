import { useEffect } from 'react';
import './App.css';
import Login from "./Login"
import { getTokenFromResponse } from './spotify';
function App() {
 useEffect(()=>{
  const token = getTokenFromResponse();
  console.log("MY TOKEN IS: ",token);
 },[]);

  return (
    <div className="App">
      <h1>
      
      </h1>
  
    <Login/>
    </div>
  );

  
}

export default App;
