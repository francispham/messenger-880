import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      letterSpacing: 0,
      fontWeight: "700",
      textTransform: "none",
      margin: "1rem 3rem 0",
      fontFamily: "Montserrat, sans-serif",
    },
    h3: {
      fontSize: 26,
      fontWeight: 600,
      padding: "0.5rem 0",
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
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" }
  }
});
