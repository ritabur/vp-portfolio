import * as React from 'react';
import styled from "styled-components";
import Img from 'gatsby-image';

import { Box } from 'components/Box';
import { media as MEDIA } from 'lib/media';

const StyledContainer = styled(Box)`
  background-color: ${props => props.theme.colors.contentBackground};
`;

const StyledImg = styled(Img)`
  display: none;
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  
  ${MEDIA.above.xs`
    display: block;
    margin-right: 20px;
  `}
  
  ${MEDIA.above.md`
    margin-right: 24px;
  `}
 `;

export const ContentBoxThumbnail = ({children, image, alt}) => {
    return (
        <StyledContainer>
            <Box display="flex">
                <StyledImg fluid={image} alt={alt} />
                <Box pt={3}>
                    {children}
                </Box>
            </Box>
        </StyledContainer>
    );
};
