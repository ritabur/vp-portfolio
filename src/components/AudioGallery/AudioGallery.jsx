import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { Box } from 'components/Box';
import { media as MEDIA } from 'lib/media';

const PORTRAIT_INDICES = [0, 3, 4, 7, 8, 11];

const StyledImg = styled(Img)`
  height: 100%;
  position: relative;

  &:after {
    content: "${props => props.title}";
    display: block;
    opacity: 1;
    position: absolute;
    bottom: 12px;
    left: 15px;
    padding: 4px 12px;
    color: white;
    background-color: ${props => props.theme.colors.bodyPrimary};
    transition: opacity .2s;
  }

  ${MEDIA.above.md`
    &:after {
      opacity: 0;
    }
    
    &:hover {
      &:after {
       display: block;
       opacity: 1;
      }
    }
  `}
`;

export const AudioGallery = ({ galleryList }) => (
  <Box display="flex" flexWrap="wrap" mx={-12}>
    {galleryList.map((galleryItem, index) => {
      return (
        <Box
          mt={25}
          key={galleryItem.title}
          width={[
            '100%',
            `${PORTRAIT_INDICES.includes(index) ? '30%' : '70%'}`,
          ]}
          maxHeight={300}
          px={12}
        >
          <Link to={galleryItem.slug}>
            <StyledImg
              fluid={galleryItem.image.fluid}
              alt={galleryItem.title}
              title={galleryItem.title}
            />
          </Link>
        </Box>
      );
    })}
  </Box>
);
