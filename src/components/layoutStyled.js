import styled from 'styled-components';

export const LayoutStyled = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: "#050505";

  ${MEDIA.from.xl`
    font-size: 14px;
  `}
`;
