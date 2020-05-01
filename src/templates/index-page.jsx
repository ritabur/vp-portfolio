import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { sanitize } from 'dompurify';

import Layout from 'components/layout';

const StyledContainer = styled.div`
  padding: 20px;
`;

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  } = data;

  return (
    <Layout>
      <StyledContainer>
        <h1>{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: sanitize(html) }} />
      </StyledContainer>
      <StyledContainer>
        All pages:
        {edges.map(({ node }) => (
          <div key={node.frontmatter.title}>
            {node.frontmatter.title}:
            <Link to={node.fields.slug}>{node.fields.slug}</Link>
          </div>
        ))}
      </StyledContainer>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    allMarkdownRemark(limit: 1000) {
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
