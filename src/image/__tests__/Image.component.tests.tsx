import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '../Image.component';

describe('<Image /> tests', () => {
  it('should render successfully the image', () => {
    render(<Image src="/test.png" alt="test" />);
    expect(screen.getByRole('progressbar')).toBeDefined();
    expect(screen.getByRole('img')).toBeDefined();
  });
});