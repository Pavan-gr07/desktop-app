import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#8976fd",
    },
  },
  typography: {
    h2: {
      fontFamily: "Epilogue",
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "44px",
      letterSpacing: "0em",
    },
    body2: {
      fontFamily: "DM Sans",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0em",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "Epilogue",
          background: "rgba(131, 56, 236, 0.1)",
          borderRadius: "4px",
          padding: "20px",
          fontSize: "16px",
          fontWeight: 600,
          color: "rgba(0, 0, 0, 1)",
          "@media (max-width: 600px)": {
            padding: "1px",
            fontSize: "10px",
            width: "fit-content",
            height: "24px",
          },
          ":hover": {
            background: "rgba(131, 56, 236, 0.2)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
