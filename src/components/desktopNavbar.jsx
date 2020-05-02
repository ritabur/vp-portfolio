import * as React from 'react';
import styled from 'styled-components';

import { Box } from 'components/box';
import { Link } from 'gatsby';

const StyledH2 = styled.h2`
  margin-bottom: 35px;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-transform: uppercase;
`;

const Divider = styled.div`
  height: 1px;
  width: 230px;
  background-color: ${props => props.theme.colors.divider};
`;

const LinkWrapper = styled.div`
  padding: 3px 0;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.bodySecondary};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.5px;

  &.${props => props.activeClassName} {
    color: ${props => props.theme.colors.bodyPrimary};
  }
`;

const SocialMediaLink = styled.a`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-transform: uppercase;

  &:not(:last-child):after {
    content: '/';
    padding: 0 6px;
  }
`;

export const DesktopNavbar = () => {
  return (
    <Box pt={40}>
      <StyledH2>Name name</StyledH2>
      <Divider />
      <Box my={35}>
        <LinkWrapper>
          <StyledLink to="/" activeClassName="isActive">
            Homepage
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink to="/about" activeClassName="isActive">
            About
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink to="/category" activeClassName="isActive">
            Category
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink to="/blog-list" activeClassName="isActive">
            Blogs
          </StyledLink>
        </LinkWrapper>
      </Box>
      <Divider />
      <Box mt={35}>
        <SocialMediaLink>Facebook</SocialMediaLink>
        <SocialMediaLink>Twitter</SocialMediaLink>
      </Box>
    </Box>
  );
};
