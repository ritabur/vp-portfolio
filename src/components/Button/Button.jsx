import * as React from 'react';
import styled from 'styled-components';

// TODO: rethink variants
const BaseButton = styled.button`
  padding: 8px 28px;
  background-color: ${props => props.theme.colors.bodyPrimary};
  color: #fff;
  border: 1px solid ${props => props.theme.colors.bodyPrimary};
  letter-spacing: 1px;
  cursor: pointer;
`;

const SecondaryButton = styled(BaseButton)`
  padding: 6px 11px;
  background-color: inherit;
  color: ${props => props.theme.colors.bodyPrimary};
  border: 1px solid ${props => props.theme.colors.divider};
  font-size: ${props => props.theme.fontSizes.small};
`;

export const Button = ({ children, secondary = false }) => {
  if (secondary) {
    return <SecondaryButton type="submit">{children}</SecondaryButton>;
  }

  return <BaseButton type="submit">{children}</BaseButton>;
};
