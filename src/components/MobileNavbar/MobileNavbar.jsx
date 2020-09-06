import React from 'react';
import { Transition } from 'react-transition-group';

import { Box } from 'components/Box';
import MenuIcon from 'assets/menu.svg';
import {
  StyledOverlay,
  StyledLinkContainer,
  StyledLink,
  Divider,
  GlobaStyle,
  StyledCloseIcon,
  StyledHeaderLink,
  duration,
  defaultStyle,
  transitionStyles,
} from './StyledMobileNavbar';

export const MobileNavbar = () => {
  const [isOverlayOpen, setOverlayOpen] = React.useState(false);

  const handleClick = () => {
    setOverlayOpen(!isOverlayOpen);
  };

  const LinkContainer = () => (
    <StyledLinkContainer m="0 auto" maxWidth={[270, null, 400]}>
      <StyledLink to="/" activeClassName="isActive" onClick={handleClick}>
        Homepage
      </StyledLink>
      <Divider />
      <StyledLink to="/audio/" activeClassName="isActive" onClick={handleClick}>
        Audio
      </StyledLink>
      <Divider />
      <StyledLink
        to="/training/"
        activeClassName="isActive"
        onClick={handleClick}
      >
        Training
      </StyledLink>
      <Divider />
      <StyledLink to="/about" activeClassName="isActive" onClick={handleClick}>
        About
      </StyledLink>
      <Divider />
      <StyledLink
        to="/stories"
        activeClassName="isActive"
        onClick={handleClick}
      >
        Stories
      </StyledLink>
      <Divider />
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
