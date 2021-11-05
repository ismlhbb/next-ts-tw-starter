import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import 'styles/globals.scss';

import { store } from 'app/store';
import PageHead from 'components/PageHead';
import PageLoadingBar from 'components/PageLoadingBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageHead isIndex={true} />
      <Provider store={store}>
        <Component {...pageProps} />
        <PageLoadingBar />
      </Provider>
    </>
  );
}

export default MyApp;
