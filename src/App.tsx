import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import theme from "./theme";
import { Dashboard } from "./pages/Dashboard";
import { NewProduct } from "./pages/NewProduct";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
