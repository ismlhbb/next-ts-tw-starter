import * as React from 'react';

import Header from 'components/header/Header';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>
        <section className='bg-gray-50'>
          <div className='layout'>{children}</div>
        </section>
      </main>
    </>
  );
};

export default HomeLayout;
