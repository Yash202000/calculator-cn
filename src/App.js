import React, { useState } from 'react';
import './App.css';

function App() {
  const [isAnswer, setIsAnswer] = useState(false);
  const [currentExpression, setCurrentExpression] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumber = (value) => {
    if (currentExpression === '0') {
      setCurrentExpression(value);
    } else {
      setCurrentExpression(isAnswer === true ? value : currentExpression + value.toString());
    }
    setIsAnswer(false);
  };

  const handleOperator = (op) => {
    setOperator(op);
    setPreviousValue(currentExpression);
    setCurrentExpression('0');
    setIsAnswer(false);
  };

  const handleClear = () => {
    setCurrentExpression('0');
    setPreviousValue(null);
    setOperator(null);
  };

  const handleEqual = () => {
    if (operator && previousValue) {
      let result;
      switch (operator) {
        case '+':
          result = parseFloat(previousValue) + parseFloat(currentExpression);
          break;
        case '-':
          result = parseFloat(previousValue) - parseFloat(currentExpression);
          break;
        case '*':
          result = parseFloat(previousValue) * parseFloat(currentExpression);
          break;
        case '/':
          if (currentExpression === '0') {
            result = 'Error';
          } else {
            result = parseFloat(previousValue) / parseFloat(currentExpression);
          }
          break;
        default:
          result = 'Error';
      }
      setCurrentExpression(result.toString());
      setIsAnswer(true);
      setPreviousValue(null);
      setOperator(null);
    } else {
      setCurrentExpression('0');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{currentExpression}</div>
      <button className="clear" onClick={handleClear}>C</button>
      <button className="operator" onClick={() => handleOperator('-')}>-</button>
      <button className="operator" onClick={() => handleOperator('+')}>+</button>
      <button className="operator" onClick={() => handleOperator('*')}>*</button>
      <button className="operator" onClick={() => handleOperator('/')}>/</button>
      <button onClick={() => handleNumber(7)}>7</button>
      <button onClick={() => handleNumber(8)}>8</button>
      <button onClick={() => handleNumber(9)}>9</button>
      <button className="operator" onClick={handleEqual}>=</button>
      <button onClick={() => handleNumber(4)}>4</button>
      <button onClick={() => handleNumber(5)}>5</button>
      <button onClick={() => handleNumber(6)}>6</button>
      <button onClick={() => handleNumber('.')}>.</button>
      <button onClick={() => handleNumber(1)}>1</button>
      <button onClick={() => handleNumber(2)}>2</button>
      <button onClick={() => handleNumber(3)}>3</button>
      <button onClick={() => handleNumber(0)}>0</button>
    </div>
  );
}

export default App;
