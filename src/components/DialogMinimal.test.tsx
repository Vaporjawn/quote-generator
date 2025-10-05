import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dialog } from '@mui/material';

describe('Dialog minimal', () => {
  it('renders Dialog with text', () => {
    render(
      <Dialog open={true} onClose={() => {}} aria-labelledby="minimal-dialog-title">
        <div>Minimal Dialog Content</div>
      </Dialog>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/Minimal Dialog Content/i)).toBeInTheDocument();
  });
});
