import * as React from 'react';

import { Box } from 'components/Box';
import {
  StyledBox,
  StyledTitleLink,
  StyledH2,
  Divider,
  LinkWrapper,
  StyledLink,
  SocialMediaLink,
} from './StyledDesktopNavbar';

export const DesktopNavbar = () => {
  return (
    <StyledBox position="relative" pt={40} ml={30} data-cy="desktop-navbar">
      <StyledTitleLink to="/" activeClassName="isActive">
        <StyledH2>Vaida Pilibaitytė</StyledH2>
      </StyledTitleLink>
      <Divider />
      <Box my={35}>
        <LinkWrapper>
          <StyledLink to="/stories/" activeClassName="isActive">
            Stories
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink to="/audio/" activeClassName="isActive">
            Audio
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink to="/about/" activeClassName="isActive">
            About
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink to="/training/" activeClassName="isActive">
            Training
          </StyledLink>
        </LinkWrapper>
      </Box>
      <Divider />
      <Box mt={35}>
        <SocialMediaLink href="https://www.facebook.com/vaida.pilibaityte" target="_blank">
          Facebook
        </SocialMediaLink>
        <SocialMediaLink href="https://www.twitter.com/vpilibaityte" target="_blank">
          Twitter
        </SocialMediaLink>
      </Box>
    </StyledBox>
  );
};
