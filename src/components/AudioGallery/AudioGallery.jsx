import * as React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Box } from 'components/Box';
import { media as MEDIA } from 'lib/media';

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

export const AudioGallery = () => {
  const data = useStaticQuery(graphql`
    query AudioGalleryQuery {
      markdownRemark(frontmatter: { templateKey: { eq: "audio" } }) {
        frontmatter {
          audioList {
            smallImage {
              featuredEntry
              link
              image {
                childImageSharp {
                  fluid(maxWidth: 640) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              link
              title
            }
            largeImage {
              featuredEntry
              link
              image {
                childImageSharp {
                  fluid(maxWidth: 640) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              link
              title
            }
          }
        }
      }
    }
  `);

  const {
    markdownRemark: {
      frontmatter: { audioList },
    },
  } = data;

  return (
    <>
      {audioList.map(({ smallImage, largeImage }, index) => (
        <Box
          display="flex"
          flexWrap="wrap"
          mx={-12}
          flexDirection={index % 2 ? 'row-reverse' : 'row'}
          key={smallImage.title}
        >
          <Box mt={25} key={smallImage.title} width={['100%', '30%']} px={12}>
            <a href={smallImage.link}>
              <StyledImg
                fluid={smallImage.image.childImageSharp.fluid}
                alt={smallImage.title}
                title={smallImage.title}
              />
            </a>
          </Box>
          <Box mt={25} key={largeImage.title} width={['100%', '70%']} px={12}>
            <a href={largeImage.link}>
              <StyledImg
                fluid={largeImage.image.childImageSharp.fluid}
                alt={largeImage.title}
                title={largeImage.title}
              />
            </a>
          </Box>
        </Box>
      ))}
    </>
  );
};
