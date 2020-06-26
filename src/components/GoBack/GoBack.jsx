import * as React from 'react';
import styled from 'styled-components';

import { Box } from 'components/Box';
import ArrowIcon from 'assets/arrow.svg';

const GoBackWrapper = styled(Box)`
  background-color: ${props => props.theme.colors.contentBackground};
`;

const GoBackContent = styled(Box)`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.bold};
  letter-spacing: 0.5px;
  cursor: pointer;
`;

export const GoBack = ({ to: backToText }) => {
  return (
    <GoBackWrapper px={8} py={8} mb={[8, 16]}>
      <GoBackContent
        onClick={() => window.history.back()}
        px={16}
        py={8}
        display="inline-flex"
        alignItems="center"
        tabindex="0"
        role="button"
      >
        <ArrowIcon height={15} />
        <Box pt={2} pl={10}>
          {backToText}
        </Box>
      </GoBackContent>
    </GoBackWrapper>
  );
};
