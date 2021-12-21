import React, { useState } from 'react';
import './App.css';
import Start from './start';
import data from './data/data.json';
import Questions from './questions';

const App = () => {
  const [gameStatus, setGameStatus] = useState(false);

  if (gameStatus) {
    return (<Questions questions={data.questions} />);
  }
  return (
    <div>
      <Start title={data.title} image={data.image} onGameStart={() => setGameStatus(true)} />
    </div>
  );
}

export default App;
