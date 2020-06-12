import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { Layout } from 'components/Layout';
import { Box } from 'components/Box';
import { ContentBox } from 'components/ContentBox';
import { Heading } from 'components/Heading';
import { Base } from 'components/Base';

const StyledImg = styled(Img)`
  height: 100%;
`;

const StyledBox = styled(Box)`
  &:nth-of-type(1),
  &:nth-of-type(4) {
    width: 30%;
    height: 220px;
  } //1 4 5 8 9

  &:nth-of-type(2),
  &:nth-of-type(3) {
    width: 70%;
    height: 220px;
  }
  
    
  
  &:nth-of-type(1),
  &:nth-of-type(3) {
    padding-right: 12px;
  }
  
  &:nth-of-type(2),
  &:nth-of-type(4) {
    padding-left: 12px;
  }
`;

const Audio = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: {
        title,
        audioList,
      },
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
          <Box display="flex" flexWrap="wrap" mt={24}>
            {audioList.map(({featuredEntry, link, title, image}) => (
              <StyledBox mb={25} key={title}>
                <Link to={link}><StyledImg fluid={image.childImageSharp.fluid} alt={title}/></Link>
              </StyledBox>
            ))}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

Audio.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Audio;

// TODO: fix image max width
export const categoryPageQuery = graphql`
  query AudioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        audioList {
          featuredEntry
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
`;
