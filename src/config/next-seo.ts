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
  url: process.env.NEXT_PUBLIC_APPLICATION_BASE_URL,
  image: ogImage('next-ts-tw-starter'),
  themeColor: '#EE424D',
};

export const defaultSEOConfig: DefaultSeoProps = {
  title: undefined,
  titleTemplate: `${defaultMeta.title} | %s`,
  defaultTitle: defaultMeta.title,
  description: defaultMeta.description,
  canonical: defaultMeta.url,
  openGraph: {
    url: defaultMeta.url,
    title: defaultMeta.title,
    description: defaultMeta.description,
    type: defaultMeta.type,
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
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'initial-scale=1.0, width=device-width',
    },
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
    {
      name: 'mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'theme-color',
      content: defaultMeta.themeColor,
    },
    {
      name: 'keyword',
      content: defaultMeta.keywords,
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: defaultMeta.title,
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
    {
      name: 'msapplication-TileColor',
      content: defaultMeta.themeColor,
    },
  ],
  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      href: '/favicon/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/favicon/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'mask-icon',
      href: '/favicon/safari-pinned-tab.svg',
      color: '#000000',
    },
    {
      rel: 'shortcut icon',
      href: '/favicon/favicon.ico',
    },
    {
      rel: 'manifest',
      href: '/favicon/manifest.json',
    },
  ],
};
