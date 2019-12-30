import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css'
import Home from './components/Home/Home';

const theme = createMuiTheme({
  typography: {
   "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavigationBar />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
