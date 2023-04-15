import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import {
  RouterProvider,
} from "react-router-dom"

import theme from "./sections/GingerTheme"
import './App.css';
import router from "./Router"




const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
