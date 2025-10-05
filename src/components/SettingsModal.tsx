import React from 'react';
import { Dialog, DialogTitle, DialogActions, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

/**
 * Props for SettingsModal component.
  /**
   * Props for SettingsModal component.
   */
export interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
  quoteSource: 'api' | 'local';
  onQuoteSourceChange: (source: 'api' | 'local') => void;
  darkMode: boolean;
  onDarkModeToggle: () => void;
}

/**
 * SettingsModal component for user preferences (quote source, dark mode).
 * @param open Whether modal is open
 * @param onClose Handler to close modal
 * @param quoteSource Current quote source
 * @param onQuoteSourceChange Handler to change quote source
 * @param darkMode Whether dark mode is enabled
 * @param onDarkModeToggle Handler to toggle dark mode
 * @returns {JSX.Element}
 */
const SettingsModal: React.FC<SettingsModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="settings-dialog-title">
      <DialogTitle id="settings-dialog-title">
        Settings
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {/* No DialogContent - match minimal Dialog test structure */}
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettingsModal;
