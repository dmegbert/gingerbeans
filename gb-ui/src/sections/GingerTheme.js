import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles"

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#017478',
      light: '#49a3a7',
      dark: '#00484c',
      contrastText: '#e2e2e2',
    },
    secondary: {
      main: '#e2e2e2',
      light: '#fff',
      dark: '#b0b0b0',
      contrastText: '#000',
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme