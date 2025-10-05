import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AboutModal from './AboutModal';

describe('AboutModal', () => {
  it('renders modal content when open', () => {
    render(<AboutModal open={true} onClose={() => {}} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    // There are multiple elements with 'Quote Generator', so use getAllByText
    const quoteGenMatches = screen.getAllByText(/Quote Generator/i);
    expect(quoteGenMatches.length).toBeGreaterThan(0);
    expect(screen.getByText(/Victor Williams/i)).toBeInTheDocument();
    expect(screen.getByText(/MIT/i)).toBeInTheDocument();
    expect(screen.getByText(/GitHub Repository/i)).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<AboutModal open={false} onClose={() => {}} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(<AboutModal open={true} onClose={handleClose} />);
    const closeBtn = screen.getByLabelText(/close/i);
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalled();
  });
});
