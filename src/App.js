import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { createMuiTheme } from '@material-ui/core/styles';
import { Box, ThemeProvider, Typography } from '@material-ui/core'

import Home from './Pages/Home/Home.js';
import Devis from './Pages/Devis/Devis.js'
import Services from './Pages/Services/Services.js'
import Works from './Pages/Works/Works.js'
import Navbar from './Components/Navbar/Navbar.js';
import './App.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from './Components/Footer/Footer.js';

function App() {
  const theme = createMuiTheme({

    palette: {
      common: {
        black: '#000',
        white: '#fff'
      },
      background: {
        paper: '#fff',
        default: '#F8F9FF'
      },
      primary: {
        light: "#29669C",
        main: "#00CDD0",
        dark: "#006A69",
        contrastText: "#fff"
      },
      secondary: {
        light: "#CCBEAE",
        main: "#000",
        dark: "#A39286",
        contrastText: "#fff"
      },
      "error": {
        "light": "rgba(252, 127, 114, 1)",
        "main": "rgba(255, 31, 1, 1)",
        "dark": "rgba(225, 27, 0, 1)",
        "contrastText": "#fff"
      },
      "text": {
        primary: "rgba(29, 29, 41, 1)",
        "secondary": 'rgba(29, 29, 41, 0.6)',
        "disabled": 'rgba(29, 29, 41, 0.4)',
        "hint": 'rgba(29, 29, 41, 0.4)'
      }
    },
    "typography": {
      "fontFamily": "\"Archivo\", sans-serif",
      h1: {
        fontFamily: "\"Archivo\"",
        // fontSize: 25
      },
      "h2": {
        "fontFamily": "\"Archivo\"",
        // fontSize: 18
      },
      "h3": {
        "fontFamily": "\"Archivo\"",
        // "fontSize": 17
      },
      "h4": {
        "fontFamily": "\"Archivo\"",
        "lineHeight": "1.8",
        // "fontSize": 16
      },
      "h5": {
        "fontFamily": "\"Archivo\"",
        // "fontSize": 15
      },
      "h6": {
        "fontFamily": "\"Archivo\"",
        // "fontSize": 14
      },

      "subtitle1": {
        "fontFamily": "\"Archivo\"",
        // "fontSize": 14
      },
      "subtitle2": {
        "fontFamily": "\"Archivo\"",
        // "fontSize": 13
      },

      "body1": {
        // "fontSize": 13
      },
      "body2": {
        // "fontSize": 11
      }
    },
    "spacing": 10,
    "shadows": [
      "none",
      "0px 2px 1px -1px rgba(41,102,156,0.3),0px 1px 1px 0px rgba(41,102,156,0.2),0px 1px 3px 0px rgba(41,102,156,0.12)",
      "0px 3px 1px -2px rgba(41,102,156,0.3),0px 2px 2px 0px rgba(41,102,156,0.2),0px 1px 5px 0px rgba(41,102,156,0.12)",
      "0px 3px 3px -2px rgba(41,102,156,0.3),0px 3px 4px 0px rgba(41,102,156,0.2),0px 1px 8px 0px rgba(41,102,156,0.12)",
      "0px 2px 4px -1px rgba(41,102,156,0.3),0px 4px 5px 0px rgba(41,102,156,0.2),0px 1px 10px 0px rgba(41,102,156,0.12)",
      "0px 3px 5px -1px rgba(41,102,156,0.3),0px 5px 8px 0px rgba(41,102,156,0.2),0px 1px 14px 0px rgba(41,102,156,0.12)",
      "0px 3px 5px -1px rgba(41,102,156,0.3),0px 6px 10px 0px rgba(41,102,156,0.2),0px 1px 18px 0px rgba(41,102,156,0.12)",
      "0px 4px 5px -2px rgba(41,102,156,0.3),0px 7px 10px 1px rgba(41,102,156,0.2),0px 2px 16px 1px rgba(41,102,156,0.12)",
      "0px 5px 5px -3px rgba(41,102,156,0.3),0px 8px 10px 1px rgba(41,102,156,0.2),0px 3px 14px 2px rgba(41,102,156,0.12)",
      "0px 5px 6px -3px rgba(41,102,156,0.3),0px 9px 12px 1px rgba(41,102,156,0.2),0px 3px 16px 2px rgba(41,102,156,0.12)",
      "0px 6px 6px -3px rgba(41,102,156,0.3),0px 10px 14px 1px rgba(41,102,156,0.2),0px 4px 18px 3px rgba(41,102,156,0.12)",
      "0px 6px 7px -4px rgba(41,102,156,0.3),0px 11px 15px 1px rgba(41,102,156,0.2),0px 4px 20px 3px rgba(41,102,156,0.12)",
      "0px 7px 8px -4px rgba(41,102,156,0.3),0px 12px 17px 2px rgba(41,102,156,0.2),0px 5px 22px 4px rgba(41,102,156,0.12)",
      "0px 7px 8px -4px rgba(41,102,156,0.3),0px 13px 19px 2px rgba(41,102,156,0.2),0px 5px 24px 4px rgba(41,102,156,0.12)",
      "0px 7px 9px -4px rgba(41,102,156,0.3),0px 14px 21px 2px rgba(41,102,156,0.2),0px 5px 26px 4px rgba(41,102,156,0.12)",
      "0px 8px 9px -5px rgba(41,102,156,0.3),0px 15px 22px 2px rgba(41,102,156,0.2),0px 6px 28px 5px rgba(41,102,156,0.12)",
      "0px 8px 10px -5px rgba(41,102,156,0.3),0px 16px 24px 2px rgba(41,102,156,0.2),0px 6px 30px 5px rgba(41,102,156,0.12)",
      "0px 8px 11px -5px rgba(41,102,156,0.3),0px 17px 26px 2px rgba(41,102,156,0.2),0px 6px 32px 5px rgba(41,102,156,0.12)",
      "0px 9px 11px -5px rgba(41,102,156,0.3),0px 18px 28px 2px rgba(41,102,156,0.2),0px 7px 34px 6px rgba(41,102,156,0.12)",
      "0px 9px 12px -6px rgba(41,102,156,0.3),0px 19px 29px 2px rgba(41,102,156,0.2),0px 7px 36px 6px rgba(41,102,156,0.12)",
      "0px 10px 13px -6px rgba(41,102,156,0.3),0px 20px 31px 3px rgba(41,102,156,0.2),0px 8px 38px 7px rgba(41,102,156,0.12)",
      "0px 10px 13px -6px rgba(41,102,156,0.3),0px 21px 33px 3px rgba(41,102,156,0.2),0px 8px 40px 7px rgba(41,102,156,0.12)",
      "0px 10px 14px -6px rgba(41,102,156,0.3),0px 22px 35px 3px rgba(41,102,156,0.2),0px 8px 42px 7px rgba(41,102,156,0.12)",
      "0px 11px 14px -7px rgba(41,102,156,0.3),0px 23px 36px 3px rgba(41,102,156,0.2),0px 9px 44px 8px rgba(41,102,156,0.12)",
      "0px 11px 15px -7px rgba(41,102,156,0.3),0px 24px 38px 3px rgba(41,102,156,0.2),0px 9px 46px 8px rgba(41,102,156,0.12)"
    ]
  })

  return (
    <ThemeProvider theme={theme}>
      <Box className='app'>
        <Navbar />
        <Switch>

          {/** Accueil */}
          <Route exact path="/">
            <Home />
          </Route>

          {/** Demandez devis */}
          <Route path="/request">
            <Devis />
          </Route>

          {/** Services */}
          <Route path="/services">
            <Services/>
          </Route>
          
          {/** Réalisations */}
          <Route path="/works">
            <Works />
          </Route>

          <Route>
            <Typography component='h1' style={{width:'100%', textAlign: 'center', padding: theme.spacing(5), fontWeight: 'bold', fontSize: '30px', opacity: 0.5}}>404 Page Not Found</Typography>
          </Route>

        </Switch>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
