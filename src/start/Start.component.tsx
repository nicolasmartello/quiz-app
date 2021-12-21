import React from 'react';

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
  <div>
    <span>{title}</span>
    {image && (<img src={image} alt={title} />)}
    <button onClick={onGameStart}>Lets go!!</button>
  </div>
);

export default Start;