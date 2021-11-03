import * as React from 'react';

import Example from 'components/example/Example';
import PageHead from 'components/PageHead';
import HomeLayout from 'layouts/home/HomeLayout';

export default function ExamplePage() {
  return (
    <>
      <PageHead title='Fetch' />
      <HomeLayout>
        <div className='flex flex-col items-center justify-center min-h-main'>
          <Example />
        </div>
      </HomeLayout>
    </>
  );
}
