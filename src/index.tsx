import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App/App';
import { Provider } from 'react-redux';
import store from './state/redux-toolkit';
import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();
const globalTheme = createMuiTheme({
  palette: {
    //! CHANGE
    primary: {
      // main: '#7e0f0f'
      main: '#fff'
    },

  },
  typography: {
    h1: {
       fontSize: '5.8rem',
       [defaultTheme.breakpoints.down('md')]: {
          fontSize: '5rem',
       },
       [defaultTheme.breakpoints.down('sm')]: {
          fontSize: '4.5rem',
       },
       [defaultTheme.breakpoints.down('xs')]: {
          fontSize: '4rem',
       },
    },
    h2: {
       fontSize: '3.2rem',
       [defaultTheme.breakpoints.down('md')]: {
          fontSize: '3.1rem',
       },
       [defaultTheme.breakpoints.down('sm')]: {
          fontSize: '3rem',
       },
       [defaultTheme.breakpoints.down('xs')]: {
          fontSize: '2.7rem',
       },
    },
    h3: {
       fontSize: '2.5rem',
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.25rem',
     },
     [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '2rem',
     },
     [defaultTheme.breakpoints.down('xs')]: {
        fontSize: '1.9rem',
     },
    },
    h5: {
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.25rem',
     },
     [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1rem',
     },
     [defaultTheme.breakpoints.down('xs')]: {
        fontSize: '1rem',
     },
    },


    button: {
       fontSize: '1.3rem'
    }

  }
})
   //! CHANGE
console.log(globalTheme);

ReactDOM.render(
  <Provider store={store}>

  <ThemeProvider theme={globalTheme}>
    <App />
  </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

