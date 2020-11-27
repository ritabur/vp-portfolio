import * as React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

import { Layout } from 'components/Layout';
import { SEO } from 'components/SEO';
import { Box } from 'components/Box';
import { ContentBoxWithImage } from 'components/ContentBox';
import { Heading } from 'components/Heading';
import { Base } from 'components/Base';

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.bodyPrimary};
  text-decoration: none;
`;

const StyledHeading = styled(Heading)`
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -4px;
    left: 0;
    background-color: ${props => props.theme.colors.bodyPrimary};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  &:focus:after,
  &:hover:after {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const Stories = ({ pageContext, data, location }) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = data;

  // all images - maxWidth at least 850px
  return (
    <Layout>
      <SEO
        title="Stories"
        image={posts[0].node.frontmatter.image.childImageSharp.fluid.src}
        path={location.pathname}
      />
      <Box mt={[8, 16, 30]} mb={[32, 72]} width={[null, null, null, '95%']}>
        <Box mr={[8, 16, 86, 0]} ml={[8, 16, 86, 106]}>
          {posts.map(({ node: post }) => {
            return (
              <StyledLink to={post.fields.slug} key={post.frontmatter.title}>
                <Box mb={[30, 40, 70]}>
                  <ContentBoxWithImage
                    image={post.frontmatter.image.childImageSharp.fluid}
                    alt={post.frontmatter.title}
                    footerContent={post.frontmatter.date}
                  >
                    <StyledHeading>{post.frontmatter.title}</StyledHeading>
                    <Base content={post.excerpt} />
                  </ContentBoxWithImage>
                </Box>
              </StyledLink>
            );
          })}
        </Box>
      </Box>
    </Layout>
  );
};

export default Stories;

export const storyListQuery = graphql`
  query StoryList($language: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "story" }
          language: { eq: $language }
        }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 850) {
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
