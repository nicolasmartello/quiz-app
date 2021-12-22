import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

jest.mock('../data/data.json', () => ({ 
  title: 'test',
  image: 'http://test.com',
  questions: [{
    text: 'question one',
    image: 'http://test.com',
    lifetimeSeconds: 1,
    options: [{
      text: 'one',
      correct: true,
    }]
  }],
 }));

describe('<App /> tests' , () => {
  it('should render quiz-app', () => {
    render(<App />);
    expect(screen.getByText(/test/)).toBeDefined();
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/question/)).toBeDefined();
  });
});
