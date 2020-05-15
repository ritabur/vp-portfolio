import styled from 'styled-components';
import { Link } from 'gatsby';

import { Box } from 'components/Box';

export const StyledH2 = styled.h2`
  margin-bottom: 35px;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.bold};
  text-transform: uppercase;
`;

export const Divider = styled.div`
  height: 1px;
  width: 230px;
  background-color: ${props => props.theme.colors.divider};
`;

export const LinkWrapper = styled.div`
  padding: 3px 0;
`;

export const StyledLink = styled(Link)`
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

export const StyledTitleLink = styled(Link)`
  color: ${props => props.theme.colors.bodyPrimary};
  text-decoration: none;
`;

export const SocialMediaLink = styled.a`
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

export const StyledBox = styled(Box)`
  top: 30%;
  transform: translateY(-30%);
`;
