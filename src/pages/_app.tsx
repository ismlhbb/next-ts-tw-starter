import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Provider } from 'react-redux';

import 'styles/globals.scss';

import { store } from 'app/store';
import PageLoadingBar from 'components/PageLoadingBar';
import { defaultSEOConfig } from 'constants/next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <DefaultSeo {...defaultSEOConfig} />
        <Component {...pageProps} />
        <PageLoadingBar />
      </Provider>
    </>
  );
}

export default MyApp;
