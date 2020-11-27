import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { useAppContext } from 'context/AppContext';

export const SEO = ({ description, title, image, path }) => {
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

  const { selectedLanguage } = useAppContext();

  const url = site.siteMetadata.siteUrl;
  const metaTitle = title
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title;

  return (
    <Helmet>
      <html lang={selectedLanguage} />
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
      {/*TODO: translate keywords*/}
      <meta name="keywords" content="audio, documentary, radio, training" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};
