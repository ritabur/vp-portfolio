import styled from 'styled-components';

export const Title = styled.div`
  margin-bottom: 3px;
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const StyledTextarea = styled.textarea`
  display: inline-block;
  width: 100%;
  padding: 7px;
  border: 1px solid ${(props) => props.theme.colors.divider};
  resize: vertical;
`;

export const StyledInput = styled.input`
  padding: 7px;
  border: 1px solid ${(props) => props.theme.colors.divider};
`;
