import React, { memo } from 'react';
import { Option } from '../data/data.type.d';
import { QuestionsBlock } from './Questions.styles';

type QuestionComponentProps = Option & {
  highlight: boolean;
  onSelectAnswer: (isCorrectAnswer: boolean) => void;
};

const QuestionComponent = ({
  text,
  correct,
  highlight,
  onSelectAnswer
}: QuestionComponentProps) => (
  <QuestionsBlock
    highlight={highlight && correct}
    onClick={() => onSelectAnswer(correct)}
  >
    {text}
  </QuestionsBlock>
);

export default memo(QuestionComponent);
