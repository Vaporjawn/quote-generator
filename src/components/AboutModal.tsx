import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Link,
  Box,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="about-dialog-title">
      <DialogTitle id="about-dialog-title">
        About Quote Generator
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box>
          {/* Wrap all content in a single Box to avoid array children */}
          <Box>
            <Typography variant="body1" gutterBottom>
              <span style={{ fontWeight: 600 }}>Quote Generator</span> is an open-source app built with Vite, React, TypeScript, and Material UI. It fetches quotes from public APIs and provides a local fallback for offline use.
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              <span style={{ fontWeight: 600 }}>Author:</span> Victor Williams (@Vaporjawn)
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              <span style={{ fontWeight: 600 }}>License:</span> <Link href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener">MIT</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              <span style={{ fontWeight: 600 }}>Source Code:</span> <Link href="https://github.com/Vaporjawn/quote-generator" target="_blank" rel="noopener">GitHub Repository</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              <span style={{ fontWeight: 600 }}>Technologies:</span> Vite, React, TypeScript, Material UI
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Contributions welcome! See the README for guidelines.
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AboutModal;
