import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from 'components/Layout';
import { Box } from 'components/Box';
import { ContentBox } from 'components/ContentBox';
import { Heading } from 'components/Heading';
import { Base } from 'components/Base';
import { ThumbnailList } from 'components/ThumbnailList';
import { SEO } from 'components/SEO';

const Training = ({ data, location }) => {
  const {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
    allMarkdownRemark: { edges: thumbnailList },
  } = data;

  return (
    <Layout>
      <SEO title="Training" path={location.pathname} />
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

Training.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Training;

export const categoryPageQuery = graphql`
  query TrainingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { templateKey: { eq: "training1" } } }
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
            fullDescription
            image {
              childImageSharp {
                fluid(maxWidth: 100) {
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
