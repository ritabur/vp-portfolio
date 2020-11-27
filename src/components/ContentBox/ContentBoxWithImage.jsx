import * as React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { Box } from 'components/Box';

const IMAGE_CREDITS_COLOR = '#373737';

const StyledContainer = styled(Box)`
  background-color: ${props => props.theme.colors.contentBackground};
`;

const StyledImg = styled(Img)`
  max-width: 100%;
  max-height: 100%;
`;

const ContentFooter = styled(Box)`
  background-color: ${props => props.theme.colors.contentFooter};
  font-size: ${props => props.theme.fontSizes.small};
  text-transform: uppercase;
  text-align: center;
`;

const ImageCredits = styled.div`
  padding-top: 2px;
  padding-right: 20px;
  font-size: ${props => props.theme.fontSizes.smMedium};
  font-style: italic;
  color: ${IMAGE_CREDITS_COLOR};
  text-align: right;
`;

export const ContentBoxWithImage = ({
  children,
  footerContent,
  image,
  alt,
  imageCredits,
}) => {
  return (
    <StyledContainer>
      <StyledImg fluid={image} alt={alt} />
      {imageCredits && <ImageCredits>{imageCredits}</ImageCredits>}
      <Box py={[24, 62, 70]} px={[18, 75, 84]}>
        {children}
      </Box>
      {footerContent && (
        <ContentFooter py={16} px={8}>
          {footerContent}
        </ContentFooter>
      )}
    </StyledContainer>
  );
};
