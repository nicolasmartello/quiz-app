import React from 'react';
import { Question } from '../data/data.type.d';

type QuestionsHeaderProps = Pick<Question, 'image' | 'text'>;

const QuestionsHeader = ({
  image,
  text,
}: QuestionsHeaderProps) => (
  <header>
    <p>{text}</p>
    <img src={image} alt={text} />
  </header>
);  

export default QuestionsHeader;
