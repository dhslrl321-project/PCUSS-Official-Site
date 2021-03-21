import Head from "next/head";

const withHead = (Component, title, description) => {

  const ogTitle = "배재대학교 정보보안학과 - " + title;

  const Template = props => {
    return (
      <>
        <Head>
          <title>정보보안학과 - {title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={ogTitle} />
          <meta property="og:description" content={description} />
        </Head>
        <Component {...props} />
      </>
    );
  };

  return Template;
};

export default withHead;