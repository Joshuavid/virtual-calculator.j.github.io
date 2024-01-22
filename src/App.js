import React, { useState } from "react";
import { evaluate } from 'mathjs';
import './App.css';

function App() {

  const [result, setResult] = useState("");

  const handleKeyPress = (e) => {
    const key = e.key;
  
    if (/\d/.test(key) || ['+', '-', '*', '/'].includes(key)) {
      setResult(result.concat(key));
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      backspace();
    }
  };

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0, - 1));
  }

  const calculate = () => {
    try {
      const resultValue = evaluate(result);
      if (Number.isFinite(resultValue)) {
        setResult(resultValue.toString());
      } else {
        setResult("Error");
      }
    } catch (err) {
      setResult("Error");
    }
  }

  return (
    <>
    <div className="container">
      <form>
        <input type="text" value = { result } />
      </form>

      <div className="keypad">
        <button onKeyDown={handleKeyPress} className="highlight" onClick={clear} id="clear"> Clear </button>
        <button onKeyDown={handleKeyPress} className="highlight" onClick={backspace} id="backspace"> C </button>
        <button onKeyDown={handleKeyPress} className="highlight" name="/" onClick={handleClick}> &divide; </button>
        <button onKeyDown={handleKeyPress} name="7" onClick={handleClick}> 7 </button>
        <button onKeyDown={handleKeyPress} name="8" onClick={handleClick}> 8 </button>
        <button onKeyDown={handleKeyPress} name="9" onClick={handleClick}> 9 </button>
        <button onKeyDown={handleKeyPress} className="highlight" name="*" onClick={handleClick}> &times; </button>
        <button onKeyDown={handleKeyPress} name="4" onClick={handleClick}> 4 </button>
        <button onKeyDown={handleKeyPress} name="5" onClick={handleClick}> 5 </button>
        <button onKeyDown={handleKeyPress} name="6" onClick={handleClick}> 6 </button>
        <button onKeyDown={handleKeyPress} className="highlight" name="-" onClick={handleClick}> &ndash; </button>
        <button onKeyDown={handleKeyPress} name="1" onClick={handleClick}> 1 </button>
        <button onKeyDown={handleKeyPress} name="2" onClick={handleClick}> 2 </button>
        <button onKeyDown={handleKeyPress} name="3" onClick={handleClick}> 3 </button>
        <button onKeyDown={handleKeyPress} className="highlight" name="+" onClick={handleClick}> + </button>
        <button onKeyDown={handleKeyPress} name="0" onClick={handleClick}> 0 </button>
        <button onKeyDown={handleKeyPress} name="." onClick={handleClick}> . </button>
        <button onKeyDown={handleKeyPress} className="highlight" onClick={calculate} id="result"> = </button>
      </div>
  
  </div>

    </>
  );
}

export default App;
