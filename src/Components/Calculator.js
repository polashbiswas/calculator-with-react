import React, { useState } from "react";
import "./calculator.css";



const Calculator = () => {
    let [numOne, setNumOne] = useState("");
    let [numTwo, setNumTwo] = useState("");
    let [ans, setAns] = useState("");
    let [error, setError] = useState("");

    //validation logic 
    const validationInput = () => {
        if (numOne === '') {
            setError("Error :  Num1 cannot be empty")
        }
        if (numTwo === '') {
            setError('Please enter a value for num2');
            return;
        }
        if (!/^-?\d*\.?\d+$/.test(numOne) || !/^-?\d*\.?\d+$/.test(numTwo)) {
            setError('Please enter valid numbers for both num1 and num2');
            return;
        }

        setError('');
        return true;
    };


    function handleOperation(operator) {
        if (!validationInput()) {
            return;
        }
        const number1 = parseInt(numOne);
        const number2 = parseInt(numTwo);
        switch (operator) {
            case "+":
                setAns(number1 + number2);
                break;
            case "-":
                setAns(number1 - number2);
                break;
            case "*":
                setAns(number1 * number2);
                break;
            case "/":
                setAns(number1 / number2);
                break;
            default:
        }
    }
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="input">
                <input type="text" placeholder="Name 1" onChange={(e) => setNumOne(e.target.value)} value={numOne} />
                <input type="text" placeholder="Name 2" onChange={(e) => setNumTwo(e.target.value)} value={numTwo} />
            </div>
            <div className="btn">
                <button onClick={() => handleOperation('+')}>+</button>
                <button onClick={() => handleOperation('-')}>-</button>
                <button onClick={() => handleOperation('*')}>*</button>
                <button onClick={() => handleOperation('/')}>/</button>
            </div>
            {ans !== "" &&
                <p className="result">Result = <span className="resultStyle">{ans}</span></p>}
            {error && <p className="error">{error}</p>}
            {ans !== '' && (
                <p className="success">
                    Success: Your result is shown above!
                </p>
            )}
        </div>
    )
}

export default Calculator;