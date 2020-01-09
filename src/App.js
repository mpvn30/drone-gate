import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart'

const theme = createMuiTheme({
  typography: {
   "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <NavigationBar />
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;