import * as React from 'react';

import { Box } from 'components/Box';
import { useAppContext } from 'context/AppContext';
import { getLocalizedPath, goHome } from 'utils/routing';
import { t } from 'utils/translations';
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
  const { selectedLanguage } = useAppContext();

  return (
    <StyledBox position="relative" pt={40} ml={30} data-cy="desktop-navbar">
      <StyledTitleLink to={goHome(selectedLanguage)} activeClassName="isActive">
        <StyledH2>Vaida Pilibaitytė</StyledH2>
      </StyledTitleLink>
      <Divider />
      <Box my={35}>
        <LinkWrapper>
          <StyledLink
            to={getLocalizedPath('stories', selectedLanguage)}
            activeClassName="isActive"
          >
            {t('stories')}
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink
            to={getLocalizedPath('audio', selectedLanguage)}
            activeClassName="isActive"
          >
            {t('audio')}
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink
            to={getLocalizedPath('about', selectedLanguage)}
            activeClassName="isActive"
          >
            {t('about')}
          </StyledLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledLink
            to={getLocalizedPath('contact', selectedLanguage)}
            activeClassName="isActive"
          >
            {t('contact')}
          </StyledLink>
        </LinkWrapper>
      </Box>
      <Divider />
      <Box mt={35}>
        <SocialMediaLink
          href="https://www.facebook.com/vaida.pilibaityte"
          target="_blank"
        >
          Facebook
        </SocialMediaLink>
        <SocialMediaLink
          href="https://www.twitter.com/vpilibaityte"
          target="_blank"
        >
          Twitter
        </SocialMediaLink>
      </Box>
    </StyledBox>
  );
};
