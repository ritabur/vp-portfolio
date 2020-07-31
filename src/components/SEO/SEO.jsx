import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// TODO: change lang to content lang
export const SEO = ({ description, lang = 'en', title, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const metaTitle = title
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{metaTitle}</title>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      {image && <meta property="og:image" content={image} />}
      {description && <meta property="og:description" content={description} />}
      <meta name="keywords" content="Audio, Documentary, Radio" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};
