import type { NextPage } from 'next';
import Image from 'next/image';

import ButtonLink from 'components/links/ButtonLink';
import CustomLink from 'components/links/CustomLink';
import UnstyledLink from 'components/links/UnstyledLink';
import HomeLayout from 'layouts/home/HomeLayout';

const Data = {
  projectLink: 'https://github.com/ismlhbb/next-ts-tw-starter',
  projectName: 'Next + Typescript + Tailwind + Redux Starter',
  profileLink: 'https://ismailhabibi.netlify.app',
  profileName: 'Ismail Habibi Herman',
  vercelDeployUrl:
    'https://vercel.com/import/git?s=https://github.com/ismlhbb/next-ts-tw-starter',
  netlifyDeployUrl:
    'https://app.netlify.com/start/deploy?repository=https://github.com/ismlhbb/next-ts-tw-starter',
  vercelButtonUrl: 'https://vercel.com/button',
  netlifyButtonUrl: 'https://www.netlify.com/img/deploy/button.svg',
  generateTemplateUrl: 'https://github.com/ismlhbb/next-ts-tw-starter/generate',
};

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <div className='flex flex-col items-center justify-center text-center min-h-main'>
        <h1>{Data.projectName}</h1>
        <p className='mt-2 text-sm text-gray-700'>
          🔥 An opinionated Next.js with Typescript, Tailwind and Redux Starter.
        </p>
        <p className='mt-2 text-sm text-gray-800'>
          <CustomLink href={Data.projectLink}>See the repository</CustomLink>
        </p>
        <div className='flex justify-center gap-1 mt-2 align-center'>
          <ButtonLink href='/example'>Fetch example</ButtonLink>
        </div>
        <div className='flex justify-center gap-1 mt-2 align-center'>
          <UnstyledLink href={Data.vercelDeployUrl}>
            <Image
              width={92}
              height={32}
              src={Data.vercelButtonUrl}
              alt='Vercel deploy button'
            />
          </UnstyledLink>
          <UnstyledLink href={Data.netlifyDeployUrl}>
            <Image
              width={146}
              height={32}
              src={Data.netlifyButtonUrl}
              alt='Netlify deploy button'
            />
          </UnstyledLink>
        </div>
        <code className='p-2 bg-gray-200 rounded-lg'>
          npx degit ismlhbb/next-ts-tw-starter {'<YOUR_APP_NAME>'}
        </code>
        <ButtonLink
          className='mt-2'
          variant='primary'
          href={Data.generateTemplateUrl}
        >
          Use this template
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
