import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import ResponsiveAppBar from './core/Appbar';
import Jobs from './components/Jobs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Schools from './components/Schools';
import Contacts from './components/Contacts';
import Project from './components/Project';
import ResponsiveFooter from './core/Footer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#42a5f5',
      light: '#90caf9',
      dark: '#1976d2',
    },
    secondary: {
      main: '#8bd3c7',
    },
    background: {
      default: '#0a1929',
      paper: '#132f4c',
    },
    divider: 'rgba(144, 202, 249, 0.16)',
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
          <Route path="/contact" element={<Contacts />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <ResponsiveFooter />
      </Router>
    </ThemeProvider>
  );
}
