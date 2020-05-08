import React from 'react';
import styled from 'styled-components';

import { Box } from 'components/Box';

const StyledFooter = styled(Box)`
   border: 1px solid ${props => props.theme.colors.divider};
   font-size: ${props => props.theme.fontSizes.smMedium};
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${props => props.theme.colors.lightDivider};
`;

const StyledH4 = styled.h4`
  padding-bottom: 18px;
  font-weight: ${props => props.theme.fontWeights.bold};
  text-transform: uppercase;
`;

const StyledP = styled.p`
  padding-top: 18px;
  line-height: 1.5;
`;

export const Footer = () => (
  <StyledFooter py={[18, null, 40, 56]} px={[30, null, 70, 90]} width={[null, null, null, "85%"]} display={[null, null, "flex"]}>
      <Box as="section" pb={[30, null, 0]} pr={[null, null, 30]}>
          <StyledH4>
              About
          </StyledH4>
          <Divider />
          <StyledP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam consequatur, debitis id inventore minima molestias necessitatibus quam quo? Delectus dolores fugiat itaque iusto numquam obcaecati quas sit tempore, vita           </StyledP>
      </Box>
      <Box as="section" pb={[30, null, 0]} pr={[null, null, 30]}>
          <StyledH4>
              My studio
          </StyledH4>
          <Divider />
          <StyledP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam consequatur, debitis id inventore minima molestias necessitatibus quam quo? Delectus dolores fugiat itaque iusto numquam obcaecati quas sit tempore, vita           </StyledP>
      </Box>
      <Box as="section">
          <StyledH4>
              Posts
          </StyledH4>
          <Divider />
          <StyledP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam consequatur, debitis id inventore minima molestias necessitatibus quam quo? Delectus dolores fugiat itaque iusto numquam obcaecati quas sit tempore, vita           </StyledP>
      </Box>
  </StyledFooter>
);
