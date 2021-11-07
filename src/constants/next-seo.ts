import { DefaultSeoProps } from 'next-seo';

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
  image:
    'https://og-image-ismlhbb.vercel.app/ismlhbb%2F**next-ts-tw-starter**.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fremojansen%2Flogo.ts%40master%2Fts.svg',
};

export const defaultSEOConfig: DefaultSeoProps = {
  title: defaultMeta.title,
  titleTemplate: `${defaultMeta.title} | %s`,
  defaultTitle: defaultMeta.title,
  description: defaultMeta.description,
  canonical: defaultMeta.url,
  openGraph: {
    url: defaultMeta.url,
    title: defaultMeta.title,
    description: defaultMeta.description,
    images: [
      {
        url: defaultMeta.image,
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
