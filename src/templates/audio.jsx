import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Layout } from 'components/Layout';
import { Box } from 'components/Box';
import { ContentBox } from 'components/ContentBox';
import { Heading } from 'components/Heading';
import { Base } from 'components/Base';

const StyledImg = styled(Img)`
  height: 100%;
  position: relative;
  
  &:after {
    content: "${props => props.title}";
    position: absolute;
    opacity: 0; 
    bottom: 12px;
    left: 15px;
    padding: 4px 12px;
    color: white;
    background-color: ${props => props.theme.colors.bodyPrimary};
    transition: opacity .2s;
  }
  
  &:hover {
    &:after {
     display: block;
     opacity: 1;
    }
  }
`;

const Audio = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, audioList },
      html,
    },
  } = data;

  return (
    <Layout>
      <Box mt={[8, 16, 30]} mb={[32, 72]} width={[null, null, null, '95%']}>
        <Box mr={[8, 16, 86, 0]} ml={[8, 16, 86, 106]}>
          <ContentBox>
            <Heading>{title}</Heading>
            <Base content={html} />
          </ContentBox>
          {audioList.map(({ smallImage, largeImage }, index) => (
            <Box
              display="flex"
              flexWrap="wrap"
              mx={-12}
              flexDirection={index % 2 ? 'row-reverse' : 'row'}
              key={smallImage.title}
            >
              <Box mt={25} key={title} width={['100%', '30%']} px={12}>
                <a href={smallImage.link}>
                  <StyledImg
                    fluid={smallImage.image.childImageSharp.fluid}
                    alt={smallImage.title}
                    title={smallImage.title}
                  />
                </a>
              </Box>
              <Box
                mt={25}
                key={largeImage.title}
                width={['100%', '70%']}
                px={12}
              >
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
        </Box>
      </Box>
    </Layout>
  );
};

export default Audio;

// TODO: fix image max width/how gatsby-image works?
export const categoryPageQuery = graphql`
  query AudioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        audioList {
          smallImage {
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
`;
