import React from 'react';
import { Button } from '@mui/material';

/**
 * Props for QuoteButton component.
 */
interface QuoteButtonProps {
  onClick: () => void;
  loading?: boolean;
}

/**
 * QuoteButton component triggers fetching a new quote.
 * @param onClick Handler for button click
 * @param loading Whether to show loading state
 * @returns {JSX.Element}
 */
const QuoteButton: React.FC<QuoteButtonProps> = ({ onClick, loading }) => (
  <Button variant="contained" color="primary" onClick={onClick} disabled={loading} sx={{ mt: 2 }}>
    {loading ? 'Loading...' : 'Get New Quote'}
  </Button>
);

export default QuoteButton;
