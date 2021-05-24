import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App/App';
import { Provider } from 'react-redux';
import store from './state/redux-toolkit';
import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const globalTheme = createMuiTheme({
  palette: {
    //! CHANGE
    primary: {
      // main: '#7e0f0f'
      main: '#fff'
    }
  }
})
console.log(globalTheme);

ReactDOM.render(
  <Provider store={store}>

  <ThemeProvider theme={globalTheme}>
    <App />
  </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

