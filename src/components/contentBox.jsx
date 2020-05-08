import * as React from 'react';
import styled from 'styled-components';

import { Box } from 'components/box';

const StyledContainer = styled(Box)`
  background-color: ${props => props.theme.colors.contentBackground};
`;

const ContentBox = ({ children }) => {
    return (
        <StyledContainer py={[24, 62, 70]} px={[18, 75, 84]}>
            { children }
        </StyledContainer>
    )
};

export default ContentBox;
