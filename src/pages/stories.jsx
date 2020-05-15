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
    bottom: -1px;
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

const Stories = ({ data }) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = data;

  // TODO: take image and alt from cms
  return (
    <Layout>
      <SEO title="stories" />
      <Box mt={[8, 16, 30]} mb={[32, 72]} width={[null, null, null, '95%']}>
        <Box mr={[8, 16, 86, 0]} ml={[8, 16, 86, 106]}>
          {posts.map(({ node: post }) => (
            <Box mb={[30, 40, 70]}>
              <ContentBoxWithImage
                imageUrl="https://images.squarespace-cdn.com/content/v1/59bad530f43b55edcb5214f4/1581948189752-I3FEJRWXU01TOUID1RHI/ke17ZwdGBToddI8pDm48kBMHBux6YLloQo9VnD0ji-d7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mhydAgiKdIfeAoxVgE7c7oEyYWj_Ixra01q53fBqVWvV3h6MQ3CX2m9brj2DWdW0Q/leaves?format=2500w"
                alt="story image"
                footerContent={post.frontmatter.date}
              >
                <StyledLink to={post.fields.slug}>
                  <StyledHeading>{post.frontmatter.title}</StyledHeading>
                </StyledLink>
                <Base content="some content shortened" />
              </ContentBoxWithImage>
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default Stories;

export const blogListQuery = graphql`
  query BlogList {
    allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "story" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
