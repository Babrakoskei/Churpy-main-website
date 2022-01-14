import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@styles/theme";
import { AppProps } from "next/app";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps}></Component>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
