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

// TODO: add validation in netlify cms for min-width 840px
export const ContentBoxWithImage = ({ children }) => {
    return (
        <StyledContainer>
            <StyledImg src="https://images.squarespace-cdn.com/content/v1/59bad530f43b55edcb5214f4/1581948189752-I3FEJRWXU01TOUID1RHI/ke17ZwdGBToddI8pDm48kBMHBux6YLloQo9VnD0ji-d7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mhydAgiKdIfeAoxVgE7c7oEyYWj_Ixra01q53fBqVWvV3h6MQ3CX2m9brj2DWdW0Q/leaves?format=2500w" alt="Name name" />
            <Box py={[24, 62, 70]} px={[18, 75, 84]}>
                { children }
            </Box>
        </StyledContainer>
    )
};
