import Head from 'next/head';

interface PageHeadProps {
  title?: string;
  isIndex?: boolean;
}

const PageHead = ({ title, isIndex }: PageHeadProps) => {
  return (
    <div>
      <Head>
        <title>{`${process.env.NEXT_PUBLIC_APPLICATION_NAME} ${
          title ? `| ${title}` : ''
        }`}</title>
        {isIndex && (
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        )}
      </Head>
    </div>
  );
};

PageHead.defaultProps = {
  isIndex: false,
};

export default PageHead;
