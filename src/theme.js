import { createTheme } from '@mui/material/styles';

// A sophisticated dark theme with captivating colors
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d9ff', // Vibrant cyan
      dark: '#0088cc',
    },
    secondary: {
      main: '#ff6b35', // Warm orange accent
      dark: '#cc4400',
    },
    background: {
      default: '#0a0e27', // Deep navy background
      paper: 'rgba(15, 23, 42, 0.8)', // Semi-transparent dark blue
    },
    text: {
      primary: '#ffffff',
      secondary: '#94a3b8',
    },
    accent: {
      main: '#8b5cf6', // Purple accent
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      background: 'linear-gradient(135deg, #00d9ff 0%, #8b5cf6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#ffffff',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#00d9ff',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      color: '#ffffff',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      color: '#94a3b8',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 32px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #00d9ff 0%, #8b5cf6 100%)',
          boxShadow: '0 8px 32px rgba(0, 217, 255, 0.3)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 40px rgba(0, 217, 255, 0.4)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          '&:hover': {
            transform: 'translateY(-8px) rotateX(5deg)',
            boxShadow: '0 30px 80px rgba(0, 217, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          },
        },
      },
    },
  },
});

export default theme;
