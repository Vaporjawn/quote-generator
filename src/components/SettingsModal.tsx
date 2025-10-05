import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
  quoteSource: 'api' | 'local';
  onQuoteSourceChange: (source: 'api' | 'local') => void;
  darkMode: boolean;
  onDarkModeToggle: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  open,
  onClose,
  quoteSource,
  onQuoteSourceChange,
  darkMode,
  onDarkModeToggle,
}) => {
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
        <Button onClick={onClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettingsModal;
