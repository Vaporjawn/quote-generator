import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SettingsModal from './SettingsModal';

describe('SettingsModal', () => {
  const defaultProps = {
    open: true,
    onClose: jest.fn(),
    quoteSource: 'api' as 'api' | 'local',
    onQuoteSourceChange: jest.fn(),
    darkMode: false,
    onDarkModeToggle: jest.fn(),
  };

  it('renders dialog and title when open', () => {
    render(<SettingsModal {...defaultProps} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/Settings/i)).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<SettingsModal {...defaultProps} open={false} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    render(<SettingsModal {...defaultProps} />);
    const closeBtn = screen.getByLabelText(/close/i);
    fireEvent.click(closeBtn);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});
