import * as React from 'react';
import styled from 'styled-components';
import sanitizeHtml from 'sanitize-html';

// not using p tag: https://github.com/gatsbyjs/gatsby/issues/11108
const StyledBase = styled.div`
  font-size: ${props => props.theme.fontSizes.medium};
  line-height: 1.6;
  white-space: pre-line;
`;

export const Base = ({ content }) => (
  <StyledBase dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }} />
);
