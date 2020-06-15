import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Box } from 'components/Box';

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
    <Box display="flex">
      {audioList.map(({ smallImage, largeImage }, index) => (
        <Box mb={25}>
          <Img fluid={image.childImageSharp.fluid} />
        </Box>
      ))}
    </Box>
  );
};
