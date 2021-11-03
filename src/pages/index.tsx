import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main>
      <section className='bg-gray-50'>
        <div className='layout'>
          <div className='flex flex-col items-center justify-center text-center min-h-main'>
            <h1>Hello World</h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
