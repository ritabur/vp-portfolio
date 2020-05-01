import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background-color: gainsboro;
`;

const Footer = () => (
  <StyledFooter>FOOTER {new Date().getFullYear()}</StyledFooter>
)

export default Footer;
