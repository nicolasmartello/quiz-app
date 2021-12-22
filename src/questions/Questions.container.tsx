import React, { useState, useEffect } from 'react';
import { Question, Option } from '../data/data.type.d';
import QuestionsComponent from './Questions.component';
import QuestionsHeader from './Questions.header.component';
import MessageComponent from '../message';
import TimerComponent from '../timer';

type QuestionsContainerProps = {
  questions: Question[];
};

const QuestionsContainer = ({
  questions
}: QuestionsContainerProps) => {
  const [questionLevel, setQuestionLevel] = useState<number>(0);
  const [highlightAnswer, setHighlightAnswer] = useState<boolean>(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [secCounter, setSecCounter] = useState<number>(0);
  const handleAnswers = (isCorrectAnswer: boolean) => {
    answers.push(isCorrectAnswer);
    setAnswers(answers);
    setHighlightAnswer(true);
    setSecCounter(0);
    
    if (questionLevel < questions.length) {
      setTimeout(() => handleNextQuestion(), 1000);
    }
  };
  const handleNextQuestion = () => {
    if (questionLevel < questions.length) {
      setQuestionLevel(questionLevel + 1);
      setHighlightAnswer(false);
    }
  }
  

  useEffect(() => {
    const interval = setTimeout(() => {
      setSecCounter(secCounter + 1);
      if (secCounter === 0) {
        setHighlightAnswer(false);
      }
      
      if (
        questions[questionLevel] &&
        questions[questionLevel].lifetimeSeconds === secCounter
      ) {
        handleAnswers(false);
      }
    }, 1000);
    return () => {
      // Clear timer on unmount
      clearTimeout(interval);
    };
    // Only want to listen secCounter
    // eslint-disable-next-line
  }, [secCounter]);

  if (!questions[questionLevel]) {
    return <MessageComponent answers={answers} />;
  }

  return (
    <div className="wrapper">
      <TimerComponent seconds={questions[questionLevel].lifetimeSeconds - secCounter} />
      <QuestionsHeader
        text={questions[questionLevel].text}
        image={questions[questionLevel].image}
      />
      {questions[questionLevel].options.map((item: Option, index) => (
        <QuestionsComponent
          key={`questions-${index}`}
          onSelectAnswer={handleAnswers}
          text={item.text}
          correct={item.correct}
          highlight={highlightAnswer}
        />
      ))}
    </div>
  );
};

export default QuestionsContainer;