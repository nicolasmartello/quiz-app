import React from 'react';
import { Wrapper } from '../App.styles';

type StartProps = {
  title: string;
  image?: string;
  onGameStart: () => void;
};

const Start = ({
  title,
  image,
  onGameStart
}: StartProps) => (
  <Wrapper>
    <h2>{title}</h2>
    {image && (<img src={image} alt={title} />)}
    <button onClick={onGameStart}>Lets go!!</button>
  </Wrapper>
);

export default Start;