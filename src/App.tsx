import { CssBaseline, ThemeProvider } from "@mui/material";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { createCustomTheme } from "./theme";
import { THEMES } from "./theme/theme";

function App() {
  const routing = useRoutes(routes);
  const theme = createCustomTheme({
    theme: THEMES.DARK,
  });

  return (
    <ThemeProvider theme={{ ...theme }}>
      {/* <GlobalStyle /> */}
      <CssBaseline /> {/* css reset */}
      {routing}
    </ThemeProvider>
  );
}

export default App;
