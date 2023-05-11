import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [output, setOutput] = useState('');

  const display = (num) => {
    setOutput(output + num);
  };

  const calculate = () => {
    try {
      setOutput(eval(output).toString());
    } catch (error) {
      alert('Invalid expression');
    }
  };

  const clear = () => {
    setOutput('');
  };

  const del = () => {
    setOutput(output.slice(0, -1));
  };

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" placeholder="0" value={output} onChange={() => {}} />
        <button onClick={clear}>cl</button>
        <button onClick={del}>Del</button>
        <button onClick={() => display('%')}>%</button>
        <button onClick={() => display('/')}>/</button>
        <button onClick={() => display('7')}>7</button>
        <button onClick={() => display('8')}>8</button>
        <button onClick={() => display('9')}>9</button>
        <button onClick={() => display('*')}>*</button>
        <button onClick={() => display('4')}>4</button>
        <button onClick={() => display('5')}>5</button>
        <button onClick={() => display('6')}>6</button>
        <button onClick={() => display('-')}>-</button>
        <button onClick={() => display('1')}>1</button>
        <button onClick={() => display('2')}>2</button>
        <button onClick={() => display('3')}>3</button>
        <button onClick={() => display('+')}>+</button>
        <button onClick={() => display('.')}>.</button>
        <button onClick={() => display('0')}>0</button>
        <button onClick={calculate} className="equal">
          =
        </button>
      </div>
    </div>
  );
};

export default App;
