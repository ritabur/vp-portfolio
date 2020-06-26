import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from 'components/Layout';
import { Box } from 'components/Box';
import { AudioGallery } from 'components/AudioGallery';
import { media as MEDIA } from 'lib/media';

const StyledH1 = styled.h1`
  padding-top: 12px;
  padding-bottom: 26px;
  font-size: 21px;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: 1.5;
  word-spacing: 9999999px;
  text-align: center;
  text-transform: lowercase;

  ${MEDIA.above.sm`
    padding-top: 30px;
    padding-bottom: 66px;
  `}

  ${MEDIA.above.md`
    padding-top: 80px;
  `}
`;

const Index = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { headlineLeft },
    },
  } = data;

  return (
    <Layout>
      <Box mt={[8, 16, 30]} mb={[32, 72]} width={[null, null, null, '95%']}>
        <Box
          display={['block', null, null, 'flex']}
          mr={[8, 16, 86, 0]}
          ml={[8, 16, 86, 106]}
        >
          <Box width={['100%', null, null, '25%']}>
            <StyledH1>{headlineLeft}</StyledH1>
          </Box>
          <Box width={['auto', null, null, '75%']} pb={10}>
            <AudioGallery />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default Index;

export const pageQuery = graphql`
  query IndexTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
      frontmatter {
        headlineLeft
      }
    }
  }
`;
