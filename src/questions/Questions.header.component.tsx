import React from 'react';
import { Question } from '../data/data.type.d';
import Image from '../image';

type QuestionsHeaderProps = Pick<Question, 'image' | 'text'>;

const QuestionsHeader = ({
  image,
  text,
}: QuestionsHeaderProps) => (
  <header>
    <p>{text}</p>
    <Image src={image} alt={text} />
  </header>
);  

export default QuestionsHeader;
