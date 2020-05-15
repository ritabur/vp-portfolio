import * as React from 'react';
import styled from 'styled-components';
import sanitizeHtml from 'sanitize-html';

const StyledBase = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.6;
`;

export const Base = ({ content }) => (
  <StyledBase dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }} />
);
