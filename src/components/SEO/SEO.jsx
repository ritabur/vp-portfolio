import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { useAppContext } from 'context/AppContext';
import { t } from 'utils/translations';

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
      <meta name="twitter:title" content={metaTitle} />
      {image && <meta property="twitter:image" content={`${url}${image}`} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@vpilibaityte" />
      <meta name="keywords" content={t('seoKeywords')} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};
