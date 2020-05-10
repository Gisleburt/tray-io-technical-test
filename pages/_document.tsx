// This file adapted from https://github.com/zeit/next.js/blob/master/examples/with-styled-components/pages/_document.js
import React from 'react';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { DocumentInitialProps, RenderPageResult } from 'next/dist/next-server/lib/utils';

export default class MyDocument extends Document {
  static async getInitialProps(ctx): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = (): RenderPageResult => originalRenderPage({
        enhanceApp: (App) => (props): JSX.Element => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
