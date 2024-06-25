import { CssBaseline, ThemeProvider } from '@mui/material';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import { createCustomTheme } from './theme';
import { THEMES } from './theme/theme';
import GlobalStyle from 'theme/globalStyles';

function App() {
  const routing = useRoutes(routes);
  const theme = createCustomTheme({
    theme: THEMES.DARK,
  });

  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyle />
      <CssBaseline />
      {routing}
    </ThemeProvider>
  );
}

export default App;
