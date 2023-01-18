// import { RouteProvider } from "../routes";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../theme";
import SignIn from "../pages/SignIn";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
