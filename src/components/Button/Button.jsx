import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 8px 28px;
  background-color: ${props => props.theme.colors.bodyPrimary};
  color: #fff;
  border: none;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const Button = ({ children }) => (
  <StyledButton type="submit">{children}</StyledButton>
);
