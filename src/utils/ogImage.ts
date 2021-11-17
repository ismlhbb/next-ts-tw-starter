type OgImageOptions = Partial<{
  ogServiceUrl: string;
  theme: string;
  fontSize: string;
  author: string;
  images: string;
  images2: string;
}>;

export const ogImage = (text: string, options?: OgImageOptions) => {
  const defaultOptions: OgImageOptions = {
    ogServiceUrl: 'https://og.ismlhbb.xyz',
    theme: 'dark',
    fontSize: '100px',
    author: encodeURIComponent('ismlhbb/'),
    images: encodeURIComponent(
      'https://assets.vercel.com/image/upload/front/assets/design/nextjs-white-logo.svg'
    ),
    images2: encodeURIComponent('https://next-ts-tw.ismlhbb.xyz/ts.svg'),
  };

  const finalOptions: OgImageOptions = {
    ...defaultOptions,
    ...options,
  };

  if (finalOptions.images2) {
    return `${finalOptions.ogServiceUrl}/${finalOptions.author}**${text}**.png?theme=${finalOptions.theme}&md=1&fontSize=${finalOptions.fontSize}&images=${finalOptions.images}&images=${finalOptions.images2}`;
  }
  return `${finalOptions.ogServiceUrl}/${finalOptions.author}**${text}**.png?theme=${finalOptions.theme}&md=1&fontSize=${finalOptions.fontSize}&images=${finalOptions.images}`;
};
