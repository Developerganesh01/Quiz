import './App.css';
import { useReducer, useState } from 'react';
import Problem from './components/Problem';
function App() {
  const[val,setval]=useState(0);
  function  han(e){
    setval(val+1);
  }


  return (
    <div className='box'>
      <p>quiz</p>
      <progress value={val} max={10}/>
      <p>max:10</p>
      <p>curr:{val}</p>
      <button onClick={han}>inc</button>
      <Problem>
        <h2>problem 1:</h2>
        <p>option 1</p>
        <p>option 2</p>
        <p>option 3</p>
        <p>option 4</p>
      </Problem>
    </div>
    
  );
}

export default App;
