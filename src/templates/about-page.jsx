import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { sanitize } from 'dompurify';

import Layout from 'components/layout';

const AboutPage = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  } = data;

  return (
    <Layout>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: sanitize(html) }} />
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
