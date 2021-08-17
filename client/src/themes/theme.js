import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      letterSpacing: 0,
      fontWeight: "700",
      textTransform: "none",
      margin: "1rem 2rem 0",
      fontFamily: "Montserrat, sans-serif",
    },
    h3: {
      fontSize: 26,
      fontWeight: 600,
      padding: "5px 0 20px",
    },
    h4: {
      fontSize: 26,
      fontWeight: 600,
      paddingTop: "2px",
    },
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold"
      }
    }
  },
  palette: {
    primary: { 
      main: "#3A8DFF",
      light: "#86B9FF",
    },
    secondary: { 
      main: "#B0B0B0",
      light: "#FFFFFF"
    },
  },
  spacing: [2, 4, 8, 16, 20, 32, 43, 64, 128, 256, 512, 43],
});
