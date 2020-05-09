import * as React from 'react';
import styled from 'styled-components';

import { Box } from 'components/Box';
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

const StyledTitleLink = styled(Link)`
  color: ${props => props.theme.colors.bodyPrimary};
  text-decoration: none;
`;

const SocialMediaLink = styled.a`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-transform: uppercase;
  text-decoration: none;
  color: ${props => props.theme.colors.bodyPrimary};

  &:not(:last-child):after {
    content: '/';
    padding: 0 6px;
  }
`;

const StyledBox = styled(Box)`
  top: 30%;
  transform: translateY(-30%);
`;

export const DesktopNavbar = () => {
  return (
    <StyledBox position="relative" pt={40}>
      <StyledTitleLink to="/" activeClassName="isActive">
        <StyledH2>Name name</StyledH2>
      </StyledTitleLink>
      <Divider />
      <Box my={35}>
        <LinkWrapper>
          <StyledLink to="/audio" activeClassName="isActive">
              Audio
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink to="/training" activeClassName="isActive">
            Training
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink to="/about" activeClassName="isActive">
              About
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink to="/stories" activeClassName="isActive">
            Stories
          </StyledLink>
        </LinkWrapper>
      </Box>
      <Divider />
      <Box mt={35}>
        <SocialMediaLink href="https://www.facebook.com" target="_blank">
          Facebook
        </SocialMediaLink>
        <SocialMediaLink href="https://www.twitter.com" target="_blank">
          Twitter
        </SocialMediaLink>
      </Box>
    </StyledBox>
  );
};
