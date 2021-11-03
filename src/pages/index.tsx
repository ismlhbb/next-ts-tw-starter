import type { NextPage } from 'next';

import ButtonLink from 'components/links/ButtonLink';
import CustomLink from 'components/links/CustomLink';
import HomeLayout from 'layouts/home/HomeLayout';

const Data = {
  projectLink: 'https://github.com/ismlhbb/Next-ts-tw-starter',
  projectName: 'Next + Typescript + Tailwind + Redux Starter',
  profileLink: 'https://ismailhabibi.netlify.app',
  profileName: 'Ismail Habibi Herman',
};

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <div className='flex flex-col items-center justify-center text-center min-h-main'>
        <h1>{Data.projectName}</h1>
        <p className='mt-2 text-sm text-gray-700'>
          🔥 An opinionated React + Typescript + Tailwind + Redux Starter.
        </p>
        <p className='mt-2 text-sm text-gray-800'>
          <CustomLink href={Data.projectLink}>See the repository</CustomLink>
        </p>

        <ButtonLink className='mt-2' href='/example'>
          Fetch example
        </ButtonLink>

        <footer className='absolute text-gray-600 bottom-2'>
          © {new Date().getFullYear()} By{' '}
          <CustomLink href={Data.profileLink}>{Data.profileName}</CustomLink>
        </footer>
      </div>
    </HomeLayout>
  );
};

export default Home;
