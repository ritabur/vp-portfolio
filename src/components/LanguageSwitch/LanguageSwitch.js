import * as React from 'react';
import styled from 'styled-components';
import {navigate} from "gatsby"

import {Box} from 'components/Box';
import {useAppContext} from 'context/AppContext';
import {BASE_LANGUAGE, languages} from 'const';

const StyledLanguageContainer = styled.div`
    background-color: ${props => props.theme.colors.contentBackground};
`;

const Language = styled.div`
  color: ${props => props.theme.colors.bodyPrimary};
  cursor: pointer;

  ${props => props.isActive && `
    text-decoration: underline;
    pointer-events: none;
  `}
`;

export const LanguageSwitch = ({className}) => {
    const {selectedLanguage, setLanguage} = useAppContext();

    const handleClick = (language) => {
        setLanguage(language);
        const isLocalizedUrl = Object.values(languages).includes(location.pathname.split('/')[1]);
        const pathWithoutLang = location.pathname.split('/')[2];

        language === BASE_LANGUAGE
            ? navigate(`/${location.pathname.split('/')[2]}`)
            : navigate(isLocalizedUrl ? `/${language}${pathWithoutLang}` : `/${language}${location.pathname}`)
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
    )
};
