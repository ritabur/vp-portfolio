import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { sanitize } from 'dompurify';

import { Box } from 'components/box';
import Layout from 'components/layout';
import ContentBox from 'components/contentBox';
import Heading from 'components/Heading';

const AboutPage = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  } = data;

  return (
    <Layout>
      <Box mt={[8, 16]} mb={[32, 72]} width={[null, null, null, "85%"]}>
        <Box mx={[8, 16, null, 100]}>
          <ContentBox>
            <Heading>{title}</Heading>
            <p dangerouslySetInnerHTML={{ __html: sanitize(html) }} />
          </ContentBox>
        </Box>
      </Box>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default AboutPage;

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
