import * as React from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'components/Layout';
import { Box } from 'components/Box';
import { ContentBox } from 'components/ContentBox';
import { ThumbnailList } from 'components/ThumbnailList';
import { Heading } from 'components/Heading';
import { Base } from 'components/Base';
import { SEO } from 'components/SEO';
import { t } from 'utils/translations';

const Audio = ({ data, location }) => {
  const {
    markdownRemark: { html },
    allMarkdownRemark: { edges: thumbnailList },
  } = data;

  return (
    <Layout>
      <SEO
        title={t('audio')}
        path={location.pathname}
        image={
          thumbnailList[0].node.frontmatter.image.childImageSharp.fluid.src
        }
      />
      <Box mt={[8, 16, 30]} mb={[32, 72]} width={[null, null, null, '95%']}>
        <Box mr={[8, 16, 86, 0]} ml={[8, 16, 86, 106]}>
          <ContentBox>
            <Heading>{t('audio')}</Heading>
            <Base content={html} />
          </ContentBox>
          <Box mt={[30, 40]}>
            {thumbnailList.length > 0 && (
              <ThumbnailList contentList={thumbnailList} />
            )}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Audio;

export const categoryPageQuery = graphql`
  query AudioPage($id: String!, $language: String) {
    markdownRemark(id: { eq: $id }) {
      html
    }
    allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "audio-post" }
          language: { eq: $language }
        }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            shortDescription
            image {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
