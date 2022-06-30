import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-feature-settings: "tnum";
  }

  .markdown-body {
    margin: 0 auto;
    padding: 0 1rem 2rem;
    max-width: min(1000px, 100%);
  }
`;

const theme = {};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
