import * as React from 'react';
import styled from 'styled-components';
import { sanitize } from 'dompurify';

const StyledBase = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.6;
`;

export const Base = ({ content }) => (
  <StyledBase dangerouslySetInnerHTML={{ __html: sanitize(content) }} />
);
