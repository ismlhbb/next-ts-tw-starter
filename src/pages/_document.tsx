import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { defaultMeta } from 'constants/next-seo';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang='id'>
        <Head>
          <meta name='application-name' content={defaultMeta.title} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#EE424D' />
          <meta name='keyword' content={defaultMeta.keywords} />
          {/* Apple */}
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-title' content={defaultMeta.title} />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          {/* ItemProp */}
          <meta itemProp='name' content={defaultMeta.title} />
          <meta itemProp='description' content={defaultMeta.description} />
          {/* Favicons */}
          {/* <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicons/apple-touch-icon.png'
          />
          <link rel='shortcut icon' href='/favicons/app-icon.png' /> */}
          <link rel='manifest' href='/manifest.json' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
