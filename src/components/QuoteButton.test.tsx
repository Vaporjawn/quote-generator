import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuoteButton from './QuoteButton';

describe('QuoteButton', () => {
  it('renders button and handles click', () => {
    const handleClick = jest.fn();
    render(<QuoteButton onClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('shows loading state', () => {
    render(<QuoteButton onClick={() => {}} loading={true} />);
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });
});
