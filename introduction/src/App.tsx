import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import ResponsiveAppBar from './core/Appbar';
import Jobs from './components/Jobs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Schools from './components/Schools';
import Contacts from './components/Contacts';
import Project from './components/Project';
import Teaching from './components/Teaching';
import Cv from './components/Cv';
import ResponsiveFooter from './core/Footer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#88c9a7',
      light: '#b4e2c0',
      dark: '#4c9774',
      contrastText: '#102019',
    },
    secondary: {
      main: '#e9b86f',
      light: '#f4d39c',
      dark: '#b98239',
      contrastText: '#21180b',
    },
    success: {
      main: '#79c99a',
    },
    background: {
      default: '#101817',
      paper: '#182522',
    },
    text: {
      primary: '#f2f5f1',
      secondary: '#aebdb4',
    },
    divider: 'rgba(180, 226, 192, 0.16)',
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});
export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/project" element={<Project />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
        <ResponsiveFooter />
      </Router>
    </ThemeProvider>
  );
}
