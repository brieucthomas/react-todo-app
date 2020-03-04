import { createMuiTheme } from "@material-ui/core"

// Default values:
// https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '1.375rem',
      fontWeight: 400,
    },
  },
  palette: {
    background: {
      default: '#fff',
    }
  },
})

export default theme