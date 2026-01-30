import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import theme from "./theme";
import { NewProduct } from "./pages/NewProduct";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NewProduct />
    </ThemeProvider>
  );
}

export default App;
