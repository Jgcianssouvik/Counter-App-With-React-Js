
import { useState } from 'react';
import './App.css';

function App() {

const[count,setCount]=useState(0);

function decreseHandler(){
setCount(count-1);
}

function increseHandler(){
  setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
    }
  

  return (
    <div className="App">

    <div className='top-level'>
    <div className='Incrementanddec'>Increment & Decrement</div>
    <div className='mid-part'>
      <button onClick={decreseHandler} className='button-ve'>-</button>
      <div className='counting-part'>{count}</div>
      <button onClick={increseHandler} className='buttonpos'>+</button>
    </div>
    <div onClick={resetHandler} className='resetbutton'>Reset</div>
    </div>

    </div>
  );
}

export default App;
