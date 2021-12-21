import React from 'react';

type MessageComponentProps = {
  answers: boolean[];
}

const MessageComponent = ({
  answers
}: MessageComponentProps) => {
  if (answers.length < 1) {
    return null;
  }

  let message = 'Congrats you won !!';
  let fails = 0;
  for(let i=0; i < answers.length; i++) {
    if (!answers[i]) {
      fails ++;
    }
  }
  if (fails > 0) {
    message = `You failed in ${fails} answers, try again F5!`;
  }

  return (
    <div className="wrapper">
      <h3>{message}</h3>
      <div>
        <strong>{fails}</strong>/
        <strong>{answers.length}</strong>
      </div>
    </div>
  );
};

export default MessageComponent;