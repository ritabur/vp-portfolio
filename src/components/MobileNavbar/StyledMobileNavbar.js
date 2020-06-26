import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';

import { Box } from 'components/Box';
import CloseIcon from 'assets/close.svg';

export const duration = 200;

export const GlobaStyle = createGlobalStyle`
  html,
  body,
  #root {
    overflow: ${props => (props.isOverlayOpen ? 'hidden' : 'auto')};
  };
`;

export const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

export const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
};

export const Divider = styled(Box)`
  height: 1px;
  background-color: ${props => props.theme.colors.divider};
`;

export const StyledOverlay = styled.div`
  background: ${props => props.theme.colors.contentBackground};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 15px 0;
  color: ${props => props.theme.colors.bodyPrimary};
  font-size: 28px;
  text-decoration: none;
  letter-spacing: 0.5px;

  &.${props => props.activeClassName} {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 70%;
      background: ${props => props.theme.colors.lightDivider};
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.7;
      z-index: -1;
    }
  }
`;

export const StyledLinkContainer = styled(Box)`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export const StyledCloseIcon = styled(CloseIcon)`
  margin-top: 10px;
  margin-right: 10px;
`;
