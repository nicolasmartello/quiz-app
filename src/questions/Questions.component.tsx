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

  return (
    <div>
      <div className={highlight && correct ? 'highlight' : ''} onClick={() => onSelectAnswer(correct)}>{text}</div>
    </div>
  );
};

export default memo(QuestionComponent);
