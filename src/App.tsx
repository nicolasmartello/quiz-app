import React, { useState } from 'react';
import Start from './start';
import data from './data/data.json';
import Questions from './questions';
import { MainContainer } from './App.styles';

const App = () => {
  const [gameStatus, setGameStatus] = useState(false);

  if (gameStatus) {
    return (
      <MainContainer>
        <Questions questions={data.questions} />
      </MainContainer>
    );
  }
  return (
    <MainContainer>
      <Start title={data.title} image={data.image} onGameStart={() => setGameStatus(true)} />
    </MainContainer>
  );
}

export default App;
