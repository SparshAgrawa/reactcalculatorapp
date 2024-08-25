import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [storedValue, setStoredValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (value) => {
    setCurrentValue((prev) => prev + value);
  };

  const handleOperatorClick = (operator) => {
    if (currentValue === '') return;
    setStoredValue(currentValue);
    setCurrentValue('');
    setOperator(operator);
  };

  const handleClear = () => {
    setCurrentValue('');
    setStoredValue(null);
    setOperator(null);
  };

  const calculateResult = () => {
    if (operator && storedValue !== null && currentValue !== '') {
      const result = performCalculation(
        parseFloat(storedValue),
        parseFloat(currentValue),
        operator
      );
      setCurrentValue(result.toString());
      setStoredValue(null);
      setOperator(null);
    }
  };

  const performCalculation = (a, b, operator) => {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return b !== 0 ? a / b : 'Error';
      default:
        return a;
    }
  };

  return (
    <div className="calculator">
      <div className="display">{currentValue || '0'}</div>
      <div className="keypad">
        <button className="button" onClick={() => handleNumberClick('1')}>1</button>
        <button className="button" onClick={() => handleNumberClick('2')}>2</button>
        <button className="button" onClick={() => handleNumberClick('3')}>3</button>
        <button className="button operator" onClick={() => handleOperatorClick('+')}>+</button>
        <button className="button" onClick={() => handleNumberClick('4')}>4</button>
        <button className="button" onClick={() => handleNumberClick('5')}>5</button>
        <button className="button" onClick={() => handleNumberClick('6')}>6</button>
        <button className="button operator" onClick={() => handleOperatorClick('-')}>-</button>
        <button className="button" onClick={() => handleNumberClick('7')}>7</button>
        <button className="button" onClick={() => handleNumberClick('8')}>8</button>
        <button className="button" onClick={() => handleNumberClick('9')}>9</button>
        <button className="button operator" onClick={() => handleOperatorClick('*')}>*</button>
        <button className="button clear" onClick={handleClear}>C</button>
        <button className="button" onClick={() => handleNumberClick('0')}>0</button>
        <button className="button equals" onClick={calculateResult}>=</button>
        <button className="button operator" onClick={() => handleOperatorClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
