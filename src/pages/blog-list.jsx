import React from 'react';

import Layout from 'components/layout';
import SEO from 'components/seo';
import { graphql, Link } from 'gatsby';

const BlogList = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data;

  return (
    <Layout>
      <SEO title="blog list" />
      <h1>Blog list</h1>
      All blog posts:
      {edges.map(({ node }) => (
        <div key={node.frontmatter.title}>
          {node.frontmatter.title}:
          <Link to={node.fields.slug}>{node.fields.slug}</Link>
        </div>
      ))}
    </Layout>
  );
};

export default BlogList;

export const blogListQuery = graphql`
  query BlogList {
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
