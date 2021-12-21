import React, { useState, useEffect } from 'react';
import { Question, Option } from '../data/data.type.d';
import QuestionsComponent from './Questions.component';
import QuestionsHeader from './Questions.header.component';
import MessageComponent from '../message';

type QuestionsContainerProps = {
  questions: Question[];
};

const QuestionsContainer = ({
  questions
}: QuestionsContainerProps) => {
  const [questionLevel, setQuestionLevel] = useState<number>(0);
  const [highlightAnswer, setHighlightAnswer] = useState<boolean>(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [endGame, setEndGame] = useState<boolean>(false);
  const [secCounter, setSecCounter] = useState<number>(0);
  const handleAnswers = (isCorrectAnswer: boolean) => {
    answers.push(isCorrectAnswer);
    setAnswers(answers);
    setHighlightAnswer(true);
    if (questionLevel !== questions.length - 1) {
      setSecCounter(0);
      return;
    }
   
    // No more questions
    if (questionLevel === questions.length - 1) {
      console.log('handle answer');
      setHighlightAnswer(false);
      setEndGame(true);
    } else {
      handleNextQuestion();
    }
  };
  const handleNextQuestion = () => {
    if (questionLevel < questions.length) {
      setQuestionLevel(questionLevel + 1);
    }
  }
  

  useEffect(() => {
    const interval = setTimeout(() => {
      console.log(questionLevel, questions.length);
      setSecCounter(secCounter + 1);
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
    // eslint-disable-next-line
  }, [secCounter]);

  return (
    <div>
      <QuestionsHeader
        text={questions[questionLevel].text}
        image={questions[questionLevel].image}
      />
      {endGame && (<MessageComponent answers={answers} />)}
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