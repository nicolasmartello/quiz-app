import React from 'react';

type TimerProps = {
  seconds: number;
};

const TimerComponent = ({
  seconds
}: TimerProps) => (
  <div className="timer"><span>{seconds}</span></div>
);

export default TimerComponent;