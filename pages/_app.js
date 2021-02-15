import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/theme/GlobalStyle";
import theme from "../src/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
