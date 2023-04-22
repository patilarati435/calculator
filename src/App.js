import React, { useState } from "react";
import'./App.css'
const App = () => {
  const [input, setInput] = useState("");
  
  const handleNumberClick = (number) => {
    setInput(input + number);
  };
  
  const handleOperatorClick = (operator) => {
    setInput(input + operator);
  };
  
  const handleClearClick = () => {
    setInput("");
  };
  
  const handleEqualClick = () => {
   try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <input type="text" value={input} readOnly />
      <br />
      <button onClick={() => handleNumberClick("1")}>1</button>
      <button onClick={() => handleNumberClick("2")}>2</button>
      <button onClick={() => handleNumberClick("3")}>3</button>
      <button onClick={() => handleOperatorClick("+")}>+</button>
      <br />
      <button onClick={() => handleNumberClick("4")}>4</button>
      <button onClick={() => handleNumberClick("5")}>5</button>
      <button onClick={() => handleNumberClick("6")}>6</button>
      <button onClick={() => handleOperatorClick("-")}>-</button>
      <br />
      <button onClick={() => handleNumberClick("7")}>7</button>
      <button onClick={() => handleNumberClick("8")}>8</button>
      <button onClick={() => handleNumberClick("9")}>9</button>
      <button onClick={() => handleOperatorClick("*")}>*</button>
      <br />
      <button onClick={() => handleClearClick()}>C</button>
      <button onClick={() => handleNumberClick("0")}>0</button>
      <button onClick={() => handleEqualClick()}>=</button>
      <button onClick={() => handleOperatorClick("/")}>/</button>
    </div>
  );
};

export default App;
