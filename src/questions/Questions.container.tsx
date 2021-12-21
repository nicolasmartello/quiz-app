import React, { useState, useEffect } from 'react';
import { Question, Option } from '../data/data.type.d';
import QuestionsComponent from './Questions.component';
import QuestionsHeader from './Questions.header.component';

type QuestionsContainerProps = {
  questions: Question[];
};

const QuestionsContainer = ({
  questions
}: QuestionsContainerProps) => {
  const [questionLevel, setQuestionLevel] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const handleAnswers = (isCorrectAnswer: boolean) => {
    answers.push(isCorrectAnswer);
    setAnswers(answers);
  };
  const handleNextQuestion = () => {
    if (questionLevel <= questions.length) {
      setQuestionLevel(questionLevel + 1);
    }
  }

  if (!questions[questionLevel]) {
    return (<div>Something went wrong, no questions found!</div>);
  }

  return (
    <div>
      <QuestionsHeader
        text={questions[questionLevel].text}
        image={questions[questionLevel].image}
      />
      {questions[questionLevel].options.map((item: Option, index) => (
        <QuestionsComponent
          key={`questions-${index}`}
          index={index}
          onSelectAnswer={handleAnswers}
          text={item.text}
          correct={item.correct}
          // TODO
          highlight={false}
        />
      ))}
    </div>
  );
};

export default QuestionsContainer;