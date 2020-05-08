import * as React from "react";
import styled from "styled-components";

import { Box } from 'components/Box';

const StyledContainer = styled(Box)`
  background-color: ${props => props.theme.colors.contentBackground};
`;

const StyledImg = styled.img`
  max-width:100%;
  max-height:100%;
`;

const ContentFooter = styled(Box)`
  background-color: ${props => props.theme.colors.contentFooter};
  font-size: ${props => props.theme.fontSizes.small};
  text-transform: uppercase;
  text-align: center;
`;

// TODO: add validation in netlify cms for min-width 840px
export const ContentBoxWithImage = ({ children, footerContent, imageUrl, alt }) => {
    return (
        <StyledContainer>
            <StyledImg src={imageUrl} alt={alt} />
            <Box py={[24, 62, 70]} px={[18, 75, 84]}>
                { children }
            </Box>
            { footerContent &&
                <ContentFooter py={16} px={8}>
                    {footerContent}
                </ContentFooter>
            }
        </StyledContainer>
    )
};
