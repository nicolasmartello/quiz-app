import React, { useState } from 'react';
import './App.css';
import Start from './start';
import data from './data/data.json';
import Questions from './questions';

const App = () => {
  const [gameStatus, setGameStatus] = useState(false);

  if (gameStatus) {
    return (
      <div className="main-container">
        <Questions questions={data.questions} />
      </div>
    );
  }
  return (
    <div className="main-container">
      <Start title={data.title} image={data.image} onGameStart={() => setGameStatus(true)} />
    </div>
  );
}

export default App;
