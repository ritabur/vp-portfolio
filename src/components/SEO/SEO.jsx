import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// TODO: change lang to content lang
export const SEO = ({ description, lang = 'en', title, image, path }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `
  );

  const url = site.siteMetadata.siteUrl;
  const metaTitle = title
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{metaTitle}</title>

      {/* TODO: change to domain in gatsby-config */}
      <link rel="canonical" href={path ? `${url}${path}` : url} />
      <meta property="og:url" content={path ? `${url}${path}` : url} />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content="website" />
      {/* TODO: add generic image for audio and training lists */}
      {image && <meta property="og:image" content={`${url}${image}`} />}
      {description && <meta property="og:description" content={description} />}
      {description && <meta name="description" content={description} />}
      <meta name="keywords" content="Audio, Documentary, Radio, Training" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};
