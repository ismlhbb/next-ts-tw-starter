import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import * as React from 'react';

export default function PageLoadingBar() {
  const router = useRouter();
  const progress = NProgress.configure({
    showSpinner: false,
  });

  React.useEffect(() => {
    const start = (_: string, { shallow }: { shallow: boolean }) => {
      if (!shallow) {
        progress.start();
      }
    };

    const done = () => {
      progress.done();
    };

    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', done);
    router.events.on('routeChangeError', done);
    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', done);
      router.events.off('routeChangeError', done);
    };
  }, [router]);
  return <></>;
}
