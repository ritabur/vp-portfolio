import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { sanitize } from 'dompurify';

import { Box } from 'components/Box';
import { Layout } from 'components/Layout';
import { ContentBoxWithImage } from 'components/ContentBox';
import { Heading } from 'components/Heading';

const About = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  } = data;

  return (
    <Layout>
      <Box mt={[8, 16]} mb={[32, 72]} width={[null, null, null, "85%"]}>
        <Box mr={[8, 16, 100, 0]} ml={[8, 16, 100, 20]} >
          <ContentBoxWithImage>
            <Heading>{title}</Heading>
            <p dangerouslySetInnerHTML={{ __html: sanitize(html) }} />
          </ContentBoxWithImage>
        </Box>
      </Box>
    </Layout>
  );
};

About.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default About;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
