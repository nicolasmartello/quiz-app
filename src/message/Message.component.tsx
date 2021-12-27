import React from 'react';
import { Wrapper } from '../App.styles';

type MessageComponentProps = {
  answers: boolean[];
}

const MessageComponent = ({
  answers
}: MessageComponentProps) => {
  if (answers.length < 1) {
    return null;
  }
  let fails = 0;
  for(let i=0; i < answers.length; i++) {
    if (!answers[i]) {
      fails ++;
    }
  }
  if (fails > 0) {
    return (
      <Wrapper>
        <h3>{`You failed in ${fails} answers, try again F5!`}</h3>
        {<div>
          <strong>{fails}</strong>/
          <strong>{answers.length}</strong>
        </div>}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h3>Congrats you won !!</h3>
    </Wrapper>
  );
};

export default MessageComponent;