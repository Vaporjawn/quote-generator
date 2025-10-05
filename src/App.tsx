// ...existing code...
/**
 * Main application component for Quote Generator.
 * Handles theme switching, quote fetching, error handling, modals, clipboard copy, and social media sharing.
 * @module App
 */
import React, { useEffect, useState } from 'react';
import { ThemeProvider, Container, Snackbar, IconButton, Tooltip } from '@mui/material';
import getTheme from './theme';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import QuoteCard from './components/QuoteCard';
import QuoteButton from './components/QuoteButton';
import SettingsModal from './components/SettingsModal';
import AboutModal from './components/AboutModal';
import { fetchQuote } from './api/quotes';
import { Quote } from './data/localQuotes';

/**
 * App component - root of the Quote Generator application.
 * @returns {JSX.Element}
 */
const App: React.FC = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [quoteSource, setQuoteSource] = useState<'api' | 'local'>('api');
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  // Snackbar state for clipboard copy
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  // About modal state
  const [aboutOpen, setAboutOpen] = useState(false);
  const handleAboutOpen = () => setAboutOpen(true);
  const handleAboutClose = () => setAboutOpen(false);

  /**
   * Fetches a new quote from API or local source, updates state.
   * Handles loading and error states.
   */
  const getQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      let newQuote;
      if (quoteSource === 'api') {
        newQuote = await fetchQuote();
      } else {
        // Use local quotes only
        const { localQuotes } = await import('./data/localQuotes');
        const randomIndex = Math.floor(Math.random() * localQuotes.length);
        newQuote = localQuotes[randomIndex];
      }
      setQuote(newQuote);
    } catch (err) {
      setError('Failed to fetch quote. Please try again.');
    }
    setLoading(false);
  };

  // Fetch a quote when quoteSource changes
  useEffect(() => {
    getQuote();
  }, [quoteSource]);

  /**
   * Memoized MUI theme based on current mode (light/dark).
   */
  const muiTheme = React.useMemo(() => {
    return getTheme({ mode });
  }, [mode]);

  // Clipboard copy handler
  /**
   * Copies the current quote to clipboard and shows a Snackbar.
   */
  const handleCopy = async () => {
    if (quote && !loading) {
      try {
        await navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`);
        setSnackbarMsg('Quote copied to clipboard!');
      } catch {
        setSnackbarMsg('Failed to copy quote.');
      }
      setSnackbarOpen(true);
    }
  };

  /**
   * Closes the Snackbar notification.
   */
  const handleSnackbarClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  /**
   * Opens the settings modal.
   */
  const handleSettingsOpen = () => setSettingsOpen(true);
  /**
   * Closes the settings modal.
   */
  const handleSettingsClose = () => setSettingsOpen(false);
  /**
   * Changes the quote source (API or local).
   * @param source 'api' | 'local'
   */
  const handleQuoteSourceChange = (source: 'api' | 'local') => setQuoteSource(source);
  /**
   * Toggles between light and dark mode.
   */
  const handleDarkModeToggle = () => setMode(mode === 'light' ? 'dark' : 'light');

  return (
    <ThemeProvider theme={muiTheme}>
      <Container
        maxWidth="sm"
        sx={{
          textAlign: 'center',
          pt: { xs: 2, sm: 6 },
          px: { xs: 0.5, sm: 0 },
          minHeight: { xs: '100dvh', sm: '100vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
        component="main"
        role="main"
        tabIndex={-1}
        aria-label="Quote Generator main content"
      >
        <IconButton
          sx={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }}
          onClick={handleDarkModeToggle}
          color="inherit"
          aria-label={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          tabIndex={0}
        >
          {mode === 'light' ? (
            <Brightness4Icon aria-hidden="true" />
          ) : (
            <Brightness7Icon aria-hidden="true" />
          )}
        </IconButton>
        {/* Settings button */}
        <IconButton
          sx={{ position: 'absolute', top: 12, left: 12, zIndex: 2 }}
          onClick={handleSettingsOpen}
          color="inherit"
          aria-label="Open settings"
        >
          <span role="img" aria-label="Settings">
            ⚙️
          </span>
        </IconButton>
        {/* About button */}
        <IconButton
          sx={{ position: 'absolute', bottom: 12, right: 12, zIndex: 2 }}
          onClick={handleAboutOpen}
          color="inherit"
          aria-label="About this app"
        >
          <span role="img" aria-label="About">
            ℹ️
          </span>
        </IconButton>
        {error && (
          <div
            style={{ color: 'red', marginBottom: 16 }}
            role="alert"
            aria-live="assertive"
            tabIndex={0}
          >
            {error}
          </div>
        )}
        <div aria-live="polite" aria-atomic="true" style={{ width: '100%' }}>
          <QuoteCard quote={quote} loading={loading} />
        </div>
        <QuoteButton onClick={getQuote} loading={loading} />
        {/* Copy to clipboard button */}
        <IconButton
          sx={{ mt: 2 }}
          onClick={handleCopy}
          color="primary"
          aria-label="Copy quote to clipboard"
          disabled={loading || !quote}
        >
          <span role="img" aria-label="Copy">
            📋
          </span>
        </IconButton>

        {/* Social media share buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 8 }}>
          <Tooltip title="Share on Twitter/X" arrow>
            <span>
              <IconButton
                color="primary"
                aria-label="Share quote on Twitter/X"
                disabled={loading || !quote}
                component="a"
                href={
                  quote
                    ? `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + quote.text + '" — ' + quote.author)}`
                    : undefined
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title="Share on Facebook" arrow>
            <span>
              <IconButton
                color="primary"
                aria-label="Share quote on Facebook"
                disabled={loading || !quote}
                component="a"
                href={
                  quote
                    ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://yourappurl.com')}&quote=${encodeURIComponent('"' + quote.text + '" — ' + quote.author)}`
                    : undefined
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </IconButton>
            </span>
          </Tooltip>
        </div>
        {/* Snackbar for copy confirmation */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={2500}
          onClose={handleSnackbarClose}
          message={snackbarMsg}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
        {/* Settings modal */}
        <SettingsModal
          open={settingsOpen}
          onClose={handleSettingsClose}
          quoteSource={quoteSource}
          onQuoteSourceChange={handleQuoteSourceChange}
          darkMode={mode === 'dark'}
          onDarkModeToggle={handleDarkModeToggle}
        />
        {/* About modal */}
        <AboutModal open={aboutOpen} onClose={handleAboutClose} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
