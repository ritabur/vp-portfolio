import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Box } from 'components/Box';
import { Base } from 'components/Base';
import { ContentBoxThumbnail } from 'components/ContentBox';

const H2 = styled.h2`
  position: relative;
  margin-bottom: 12px;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.bold};
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -4px;
    left: 0;
    background-color: ${props => props.theme.colors.bodyPrimary};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  &:focus:after,
  &:hover:after {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const Thumbnails = styled(Box)`
  background-color: ${props => props.theme.colors.contentBackground};
`;

const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  color: ${props => props.theme.colors.bodyPrimary};
  text-decoration: none;
`;

export const ThumbnailList = ({ contentList }) => {
  return (
    <Thumbnails py={[0, 32, 40]} px={[18, 75, 84]}>
      {contentList.map(({ node: { frontmatter, fields } }) => (
        <Box pt={[24, 30]} pb={[24, 30]} key={frontmatter.title}>
          <StyledLink to={fields.slug}>
            <ContentBoxThumbnail
              image={frontmatter.image.childImageSharp.fluid}
              alt={frontmatter.title}
            >
              <H2>{frontmatter.title}</H2>
              <Base content={frontmatter.shortDescription} />
            </ContentBoxThumbnail>
          </StyledLink>
        </Box>
      ))}
    </Thumbnails>
  );
};
