import { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const Document = () => {
  return (
    <Html lang="fr" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
