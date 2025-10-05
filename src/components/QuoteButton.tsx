import React from 'react';
import { Button } from '@mui/material';

interface QuoteButtonProps {
  onClick: () => void;
  loading?: boolean;
}

const QuoteButton: React.FC<QuoteButtonProps> = ({ onClick, loading }) => (
  <Button
    variant="contained"
    color="primary"
    onClick={onClick}
    disabled={loading}
    sx={{ mt: 2 }}
  >
    {loading ? 'Loading...' : 'Get New Quote'}
  </Button>
);

export default QuoteButton;
