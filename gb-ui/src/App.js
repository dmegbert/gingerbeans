import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles'

import theme from "./sections/GingerTheme"
import './App.scss';
import LandingPage from "./pages/LandingPage"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage/>
    </ThemeProvider>
  )
}

export default App
