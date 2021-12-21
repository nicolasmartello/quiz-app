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
  let secCounter = 0;
  const handleAnswers = (isCorrectAnswer: boolean) => {
    console.log('handle answer');
    answers.push(isCorrectAnswer);
    setAnswers(answers);
    setQuestionLevel(questionLevel + 1);
    secCounter = 0;
  };
  const handleNextQuestion = () => {
    if (questionLevel < questions.length) {
      setQuestionLevel(questionLevel + 1);
    }
  }
  const interval = setTimeout(() => {
    secCounter ++;
    console.log('inside timer');

    // No more questions
    if (questionLevel === questions.length) {
      setEndGame(true);
      clearTimeout(interval);
      return;
    }

    if (questions[questionLevel] && questions[questionLevel].lifetimeSeconds === secCounter) {
      setHighlightAnswer(true);
      secCounter = 0;
    } else if (secCounter === 1 && questionLevel > 0) {
      // If the user doesn't answer in time, mark as false
      if (answers.length < questionLevel + 1) {
        handleAnswers(false);
      }
      // We wait 1 sec before move the next question
      handleNextQuestion();
      setHighlightAnswer(false);
    }
  }, 1000);

  useEffect(() => {
    return () => {
      // Clear timer on unmount
      clearTimeout(interval);
    };
  }, [interval]);

  if (!questions[questionLevel]) {
    return (<div>Something went wrong, no questions found!</div>);
  }

  return (
    <div>
      <QuestionsHeader
        text={questions[questionLevel].text}
        image={questions[questionLevel].image}
      />
      {endGame && (<MessageComponent answers={answers} />)}
      {!endGame && questions[questionLevel].options.map((item: Option, index) => (
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