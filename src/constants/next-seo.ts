import { DefaultSeoProps } from 'next-seo';

import { ogImage } from 'utils/ogImage';

export const defaultMeta = {
  title: process.env.NEXT_PUBLIC_APPLICATION_NAME,
  siteName: process.env.NEXT_PUBLIC_APPLICATION_NAME,
  description:
    'An opinionated Next.js project, added with TypeScript, TailwindCSS and Redux setup.',
  type: 'website',
  robots: 'follow, index',
  keywords:
    'next, react, tailwindcss, redux, typescript, javascript, starter, template, boilerplate',
  url: 'https://next-ts-tw-starter.vercel.app',
  image: '',
};

export const defaultSEOConfig: DefaultSeoProps = {
  title: defaultMeta.title,
  titleTemplate: `%s | ${defaultMeta.title}`,
  defaultTitle: defaultMeta.title,
  description: defaultMeta.description,
  canonical: defaultMeta.url,
  openGraph: {
    url: defaultMeta.url,
    title: defaultMeta.title,
    description: defaultMeta.description,
    images: [
      {
        url: ogImage('next-ts-tw-starter'),
        alt: 'ismlhbb/next-ts-tw-starter og-image',
      },
    ],
    site_name: defaultMeta.title,
  },
  twitter: {
    handle: '@ismlhbb',
    cardType: 'summary_large_image',
  },
};
