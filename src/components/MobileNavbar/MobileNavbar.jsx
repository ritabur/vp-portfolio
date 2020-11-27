import React from 'react';
import { Transition } from 'react-transition-group';

import { Box } from 'components/Box';
import { useAppContext } from 'context/AppContext';
import { getLocalizedPath, goHome, routeToPage } from 'utils/routing';
import { t } from 'utils/translations';
import { languages } from 'const';
import MenuIcon from 'assets/menu.svg';
import {
  StyledOverlay,
  StyledLinkContainer,
  StyledLink,
  Divider,
  GlobaStyle,
  StyledCloseIcon,
  StyledHeaderLink,
  StyledButton,
  duration,
  defaultStyle,
  transitionStyles,
} from './StyledMobileNavbar';

export const MobileNavbar = () => {
  const [isOverlayOpen, setOverlayOpen] = React.useState(false);
  const { selectedLanguage, setLanguage } = useAppContext();

  const languagesToSelect = Object.values(languages).filter(
    language => language !== selectedLanguage
  );

  const handleLanguageSwitch = lang => {
    setLanguage(lang);
    handleClick();
    routeToPage(lang);
  };

  const handleClick = () => {
    setOverlayOpen(!isOverlayOpen);
  };

  const LinkContainer = () => (
    <StyledLinkContainer m="0 auto" maxWidth={[270, null, 400]}>
      <StyledLink
        to={goHome(selectedLanguage)}
        activeClassName="isActive"
        onClick={handleClick}
      >
        {t('homepage')}
      </StyledLink>
      <Divider />
      <StyledLink
        to={getLocalizedPath('stories', selectedLanguage)}
        activeClassName="isActive"
        onClick={handleClick}
      >
        {t('stories')}
      </StyledLink>
      <Divider />
      <StyledLink
        to={getLocalizedPath('audio', selectedLanguage)}
        activeClassName="isActive"
        onClick={handleClick}
      >
        {t('audio')}
      </StyledLink>
      <Divider />
      <StyledLink
        to={getLocalizedPath('about', selectedLanguage)}
        activeClassName="isActive"
        onClick={handleClick}
      >
        {t('about')}
      </StyledLink>
      <Divider />
      <StyledLink
        to={getLocalizedPath('contact', selectedLanguage)}
        activeClassName="isActive"
        onClick={handleClick}
      >
        {t('contact')}
      </StyledLink>
      <Divider />
      <Box pt={25}>
        {languagesToSelect.map(lang => (
          <StyledButton
            secondary
            onClick={() => handleLanguageSwitch(lang)}
            key={lang}
          >
            {lang.toUpperCase()}
          </StyledButton>
        ))}
      </Box>
    </StyledLinkContainer>
  );

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={20}
      >
        <StyledHeaderLink to="/">
          <h1>Vaida Pilibaitytė</h1>
        </StyledHeaderLink>
        <Transition in={isOverlayOpen} timeout={duration}>
          {state => (
            <StyledOverlay
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <LinkContainer />
              <Box
                position="absolute"
                top={0}
                right={0}
                p={10}
                onClick={handleClick}
              >
                <StyledCloseIcon height={20} />
              </Box>
            </StyledOverlay>
          )}
        </Transition>
        <Box p={10} m={-10} onClick={handleClick}>
          <MenuIcon height={20} />
        </Box>
        <GlobaStyle isOverlayOpen={isOverlayOpen} />
      </Box>
      <Divider mx={[8, null, 16]} />
    </>
  );
};
