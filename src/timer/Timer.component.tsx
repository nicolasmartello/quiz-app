import React from 'react';
import { TimerContainer } from './Timer.styles';

type TimerProps = {
  seconds: number;
};

const TimerComponent = ({
  seconds
}: TimerProps) => (
  <TimerContainer><span>{seconds}</span></TimerContainer>
);

export default TimerComponent;
