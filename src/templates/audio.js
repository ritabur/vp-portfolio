import * as React from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'components/Layout';
import { Box } from 'components/Box';
import { ContentBox } from 'components/ContentBox';
import { ThumbnailList } from 'components/ThumbnailList';
import { Heading } from 'components/Heading';
import { Base } from 'components/Base';
import { SEO } from 'components/SEO';

const Audio = ({ data, location }) => {
  const {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
    allMarkdownRemark: { edges: thumbnailList },
  } = data;

  return (
    <Layout>
      <SEO title="Audio" path={location.pathname} />
      <Box mt={[8, 16, 30]} mb={[32, 72]} width={[null, null, null, '95%']}>
        <Box mr={[8, 16, 86, 0]} ml={[8, 16, 86, 106]}>
          <ContentBox>
            <Heading>{title}</Heading>
            <Base content={html} />
          </ContentBox>
          <Box mt={[30, 40]}>
            <ThumbnailList contentList={thumbnailList} />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Audio;

// TODO: fix image max width/how gatsby-image works?
export const categoryPageQuery = graphql`
  query AudioPage($id: String!, $language: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
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
            link
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
