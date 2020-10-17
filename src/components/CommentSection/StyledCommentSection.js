import styled from 'styled-components';
import { Box } from 'components/Box';

export const SectionDivider = styled(Box)`
    height: 1px;
    background-color: ${props => props.theme.colors.lightDivider};
`;

export const Name = styled.div`
    margin-bottom: 3px;
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: ${props => props.theme.fontWeights.bold};
`;

export const Time = styled.div`
    padding-bottom: 14px;
    display: inline-block;
    font-size: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

export const Comment = styled.div`
    margin-bottom: 30px;
    font-size: ${props => props.theme.fontSizes.medium};
`;

export const CommentDivider = styled.div`
    height: 1px;
    width: 30px;
    margin-bottom: 30px;
    background-color: ${props => props.theme.colors.lightDivider};
`;
