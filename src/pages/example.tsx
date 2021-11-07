import { NextSeo } from 'next-seo';
import * as React from 'react';

import Example from 'components/example/Example';
import { defaultMeta } from 'constants/next-seo';
import HomeLayout from 'layouts/home/HomeLayout';

export default function ExamplePage() {
  return (
    <>
      <NextSeo
        title='Fetch'
        canonical={`${defaultMeta.url}/example`}
        openGraph={{
          title: 'Fetch',
          description: 'Fetch page',
        }}
      />
      <HomeLayout>
        <div className='flex flex-col items-center justify-center min-h-main'>
          <Example />
        </div>
      </HomeLayout>
    </>
  );
}
