import React from 'react';
import { Question } from '../data/data.type.d';

type QuestionsHeaderProps = Pick<Question, 'image' | 'text'>;

const QuestionsHeader = ({
  image,
  text,
}: QuestionsHeaderProps) => (
  <header>
    <h3>{text}</h3>
    <img src={image} alt={text} />
  </header>
);  

export default QuestionsHeader;
