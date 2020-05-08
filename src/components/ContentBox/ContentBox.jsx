import * as React from 'react';
import styled from 'styled-components';

import { Box } from 'components/Box';

const StyledContainer = styled(Box)`
  background-color: ${props => props.theme.colors.contentBackground};
`;

export const ContentBox = ({ children }) => {
    return (
        <StyledContainer py={[24, 62, 70]} px={[18, 75, 84]}>
            { children }
        </StyledContainer>
    )
};
