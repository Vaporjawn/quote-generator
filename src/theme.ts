import { createTheme } from '@mui/material/styles';

/**
 * Returns a Material UI theme object based on the selected mode (light/dark).
 * @param mode 'light' | 'dark'
 * @returns {Theme}
 */
const getTheme = ({ mode }: { mode: 'light' | 'dark' }) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: mode === 'light' ? '#f5f5f5' : '#121212',
        paper: mode === 'light' ? '#fff' : '#1e1e1e',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      h4: {
        fontWeight: 700,
      },
      body1: {
        fontSize: '1.1rem',
      },
    },
  });

export default getTheme;
