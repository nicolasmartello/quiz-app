import React, { memo } from 'react';
import { Option } from '../data/data.type.d';

type QuestionComponentProps = Option & {
  highlight: boolean;
  onSelectAnswer: (isCorrectAnswer: boolean) => void;
};

const QuestionComponent = ({
  text,
  correct,
  highlight,
  onSelectAnswer
}: QuestionComponentProps) => {
  let className = 'question-text';
  if (highlight && correct) {
    className += ' highlight';
  }

  return (<div className={className} onClick={() => onSelectAnswer(correct)}>{text}</div>);
};

export default memo(QuestionComponent);
