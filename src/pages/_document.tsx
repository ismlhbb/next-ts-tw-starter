import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

const defaultMeta = {
  title: process.env.NEXT_PUBLIC_APPLICATION_NAME,
  siteName: process.env.NEXT_PUBLIC_APPLICATION_NAME,
  description:
    'An opinionated Next.js project, added with TypeScript, TailwindCSS and Redux setup.',
  type: 'website',
  robots: 'follow, index',
  keywords:
    'next, react, tailwindcss, redux, typescript, javascript, starter, template, boilerplate',
};

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
          <meta name='description' content={defaultMeta.description} />
          <meta name='robots' content={defaultMeta.robots} />
          {/* Apple */}
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-title' content={defaultMeta.title} />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          {/* Open Graph */}
          <meta property='og:title' content={defaultMeta.title} />
          <meta property='og:site_name' content={defaultMeta.siteName} />
          <meta property='og:description' content={defaultMeta.description} />
          <meta property='og:type' content={defaultMeta.type} />
          {/* Twitter */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content={defaultMeta.title} />
          <meta name='twitter:description' content={defaultMeta.description} />
          {/* ItemProp */}
          <meta itemProp='name' content={defaultMeta.title} />
          <meta itemProp='description' content={defaultMeta.description} />
          {/* Favicons */}
          <meta name='msapplication-TileColor' content='#EE424D' />
          <meta name='theme-color' content='#EE424D' />
          {/* <meta name='msapplication-TileImage' content='/favicon/ms-icon-144x144.png' /> 
          <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png'/>
          <link rel='shortcut icon' href='/app-icon.png' /> 
          <link rel='manifest' href='/manifest.json' /> */}
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
