import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { sanitize } from 'dompurify';

import Layout from 'components/layout';

const CategoryPage = ({ data }) => {
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

CategoryPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default CategoryPage;

export const categoryPageQuery = graphql`
  query CategoryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
