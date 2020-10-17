import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { Box } from 'components/Box';
import { media as MEDIA } from 'lib/media';

const StyledFooter = styled(Box)`
  border: 1px solid ${props => props.theme.colors.divider};
  font-size: ${props => props.theme.fontSizes.smMedium};
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${props => props.theme.colors.lightDivider};
`;

const StyledH4 = styled.h4`
  margin-bottom: 8px;
  font-weight: ${props => props.theme.fontWeights.bold};
  text-transform: uppercase;

  ${MEDIA.above.sm`
     height: 40px;
  `}
`;

const StyledP = styled.p`
  padding-top: 26px;
  line-height: 1.6;
`;

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
        frontmatter {
          footer {
            column1 {
              title
              body
            }
            column3 {
              title
              body
            }
            column2 {
              title
              body
            }
          }
        }
      }
    }
  `);

  const {
    markdownRemark: {
      frontmatter: { footer },
    },
  } = data;

  return (
    <StyledFooter
      py={[18, null, 40, 56]}
      px={[30, null, 70, 90]}
      width={[null, null, null, '95%']}
      display={[null, null, 'flex']}
      data-cy="footer"
    >
      <Box as="section" pb={[30, null, 0]} pr={[null, null, 30]} flex={1}>
        <StyledH4>{footer.column1.title}</StyledH4>
        <Divider />
        <StyledP>{footer.column1.body}</StyledP>
      </Box>
      <Box as="section" pb={[30, null, 0]} pr={[null, null, 30]} flex={1}>
        <StyledH4>{footer.column2.title}</StyledH4>
        <Divider />
        <StyledP>{footer.column2.body}</StyledP>
      </Box>
      <Box as="section" flex={1}>
        <StyledH4>{footer.column3.title}</StyledH4>
        <Divider />
        <StyledP>{footer.column3.body}</StyledP>
      </Box>
    </StyledFooter>
  );
};
