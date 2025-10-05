import React from 'react';
import { render, screen } from '@testing-library/react';
import QuoteCard from './QuoteCard';
import { Quote } from '../data/localQuotes';

describe('QuoteCard', () => {
  it('renders quote and author', () => {
    const quote: Quote = {
      text: 'Test quote',
      author: 'Test author',
    };
    render(<QuoteCard quote={quote} />);
    expect(screen.getByText(/Test quote/)).toBeInTheDocument();
    expect(screen.getByText(/Test author/)).toBeInTheDocument();
  });
});
