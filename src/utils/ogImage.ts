type OgImageOptions = Partial<{
  theme: string;
  fontSize: string;
  images: string;
  images2: string;
}>;

export const ogImage = (text: string, options?: OgImageOptions) => {
  const defaultOptions: OgImageOptions = {
    theme: 'dark',
    fontSize: '100px',
    images: 'https://next-ts-tw-starter.vercel.app/nextjs-white-logo.svg',
    images2: 'https://next-ts-tw-starter.vercel.app/ts.svg',
  };

  const finalOptions: OgImageOptions = {
    ...defaultOptions,
    ...options,
  };

  // eslint-disable-next-line no-extra-boolean-cast
  if (!!finalOptions.images2) {
    return `https://og-image-ismlhbb.vercel.app/ismlhbb%2F**${text}**.png?theme=${finalOptions.theme}&md=1&fontSize=${finalOptions.fontSize}&images=${finalOptions.images}&images=${finalOptions.images2}`;
  } else {
    return `https://og-image-ismlhbb.vercel.app/ismlhbb%2F**${text}**.png?theme=${finalOptions.theme}&md=1&fontSize=${finalOptions.fontSize}&images=${finalOptions.images}`;
  }
};
