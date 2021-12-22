import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuestionsContainer from '../Questions.container';
import { Question } from '../../data/data.type.d';

describe('<Questions.container /> tests', () => {
  const questionData: Question[] = [{
    text: 'React is a framework?',
    image: "https://image.tmdb.org/t/p/w185/3QU9EP8BFLnTh6w9ycDSCvhqbRU.jpg",
    lifetimeSeconds: 1,
    options: [{
      text: 'yes, it is',
      correct: false,
    }, {
      text: 'no, is a lib',
      correct: true,
    }]
  }, {
    text: 'React can work without redux?',
    image: "https://image.tmdb.org/t/p/w185/3QU9EP8BFLnTh6w9ycDSCvhqbRU.jpg",
    lifetimeSeconds: 1,
    options: [{
      text: 'yes, totally',
      correct: true,
    }, {
      text: 'no, is necessary',
      correct: false,
    }]
  }];

  it('should render the component', async () => {
    render(<QuestionsContainer questions={questionData} />);
    expect(screen.getByText(/framework/)).toBeDefined();
    userEvent.click(screen.getByText(/yes/));
    await waitFor(
      () => {
        expect(screen.getByText(/redux/)).toBeDefined();
      },
      { timeout: 1000 },
    );
    userEvent.click(screen.getByText(/totally/));
    await waitFor(
      () => {
        // Failed message
        expect(screen.getByText(/failed/)).toBeDefined();
      },
      { timeout: 1000 },
    );
  });
});