import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  // State to store simulation results for dice roll and coin flip
  const [diceResults, setDiceResults] = useState({});
  const [coinResults, setCoinResults] = useState({});

  // Function to simulate a dice roll
  const simulateDiceRoll = () => {
    const results = {};
    [
      { 1: 10 },
      { 2: 30 },
      { 3: 15 },
      { 4: 15 },
      { 5: 30 },
      { 6: 0 },
    ].forEach((outcome) => {
      for (const [key, value] of Object.entries(outcome)) {
        results[key] = 0;
        const probability = value / 100;
        for (let i = 0; i < 1000; i++) {
          if (Math.random() <= probability) {
            results[key]++;
          }
        }
      }
    });
    setDiceResults(results);
  }

  // Function to simulate a coin flip
  const simulateCoinFlip = () => {
    const results = {};
    [{ Head: 35 }, { Tail: 65 }].forEach((outcome) => {
      for (const [key, value] of Object.entries(outcome)) {
        results[key] = 0;
        const probability = value / 100;
        for (let i = 0; i < 1000; i++) {
          if (Math.random() <= probability) {
            results[key]++;
          }
        }
      }
    });
    setCoinResults(results);
  }

  return (
    <div className="app-container">
      {/* Page Title */}
      <h1>Event Simulator</h1>

      {/* Output Sections Container */}
      <div className="output-container">
        {/* Dice Roll Section */}
        <div className="output-section dice-section">
          {/* Section Title */}
          <h2 className="section-title">Dice Roll Results</h2>
          {/* Simulate Button */}
          <button className="simulate-button" onClick={simulateDiceRoll}>
            Simulate Dice Roll
          </button>
          {/* Results Display */}
          <pre className="results-display dice-results">{JSON.stringify(diceResults, null, 2)}</pre>
        </div>

        {/* Coin Flip Section */}
        <div className="output-section coin-section">
          {/* Section Title */}
          <h2 className="section-title">Coin Flip Results</h2>
          {/* Simulate Button */}
          <button className="simulate-button" onClick={simulateCoinFlip}>
            Simulate Coin Flip
          </button>
          {/* Results Display */}
          <pre className="results-display coin-results">{JSON.stringify(coinResults, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
