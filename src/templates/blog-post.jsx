import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { sanitize } from 'dompurify';

import Layout from 'components/layout';

const BlogPost = ({ data }) => {
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

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
