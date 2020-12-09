import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { Box } from 'components/Box';
import { media as MEDIA } from 'lib/media';
import { useAppContext } from 'context/AppContext';

const StyledFooter = styled(Box)`
  border: 1px solid ${(props) => props.theme.colors.divider};
  font-size: ${(props) => props.theme.fontSizes.smMedium};
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.lightDivider};
`;

const StyledH4 = styled.h4`
  margin-bottom: 8px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-transform: uppercase;

  ${MEDIA.above.sm`
     height: 40px;
  `}
`;

const StyledP = styled.p`
  padding-top: 26px;
  line-height: 1.6;
`;

// TODO: fetching both langs until footer can be part of homepage: https://github.com/netlify/netlify-cms/pull/4487
export const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      enFooterContent: markdownRemark(fields: { slug: { eq: "/en/footer/" } }) {
        frontmatter {
          title
          language
          column1 {
            body
            title
          }
          column2 {
            body
            title
          }
          column3 {
            body
            title
          }
        }
      }
      ltFooterContent: markdownRemark(fields: { slug: { eq: "/footer/" } }) {
        frontmatter {
          title
          language
          column1 {
            body
            title
          }
          column2 {
            body
            title
          }
          column3 {
            body
            title
          }
        }
      }
    }
  `);

  const { selectedLanguage } = useAppContext();
  const { ltFooterContent, enFooterContent } = data;

  const content =
    selectedLanguage === 'en'
      ? enFooterContent.frontmatter
      : ltFooterContent.frontmatter;

  return (
    <StyledFooter
      py={[18, null, 40, 56]}
      px={[30, null, 70, 90]}
      width={[null, null, null, '95%']}
      display={[null, null, 'flex']}
      data-cy="footer"
    >
      <Box as="section" pb={[30, null, 0]} pr={[null, null, 30]} flex={1}>
        <StyledH4>{content.column1.title}</StyledH4>
        <Divider />
        <StyledP>{content.column1.body}</StyledP>
      </Box>
      <Box as="section" pb={[30, null, 0]} pr={[null, null, 30]} flex={1}>
        <StyledH4>{content.column2.title}</StyledH4>
        <Divider />
        <StyledP>{content.column2.body}</StyledP>
      </Box>
      <Box as="section" flex={1}>
        <StyledH4>{content.column3.title}</StyledH4>
        <Divider />
        <StyledP>{content.column3.body}</StyledP>
      </Box>
    </StyledFooter>
  );
};
