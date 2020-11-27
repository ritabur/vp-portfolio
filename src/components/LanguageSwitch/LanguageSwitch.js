import * as React from 'react';
import styled from 'styled-components';

import { Box } from 'components/Box';
import { useAppContext } from 'context/AppContext';
import { languages } from 'const';
import { routeToPage } from 'utils/routing';

const StyledLanguageContainer = styled.div`
  background-color: ${props => props.theme.colors.contentBackground};
`;

const Language = styled.div`
  position: relative;
  color: ${props => props.theme.colors.bodyPrimary};
  cursor: pointer;
  &:after {
    content: '';
    height: 1px;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    background-color: ${props => props.theme.colors.bodyPrimary};
  }

  ${props =>
    props.isActive &&
    `
    pointer-events: none;    
  `}

  ${props =>
    !props.isActive &&
    `
    &:after {
        content: none;
    }
  `}
`;

export const LanguageSwitch = ({ className }) => {
  const { selectedLanguage, setLanguage } = useAppContext();

  const handleClick = language => {
    setLanguage(language);
    routeToPage(language);
  };

  return (
    <StyledLanguageContainer className={className}>
      <Box py={8} pr={4} pl={8} display="inline-block">
        <Language
          onClick={() => handleClick(languages.en)}
          isActive={selectedLanguage === languages.en}
        >
          {languages.en.toUpperCase()}
        </Language>
      </Box>
      <Box py={8} pr={8} pl={4} display="inline-block">
        <Language
          onClick={() => handleClick(languages.lt)}
          isActive={selectedLanguage === languages.lt}
        >
          {languages.lt.toUpperCase()}
        </Language>
      </Box>
    </StyledLanguageContainer>
  );
};
