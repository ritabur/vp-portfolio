import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Box } from 'components/Box';
import { Layout } from 'components/Layout';
import { ContentBoxWithImage } from 'components/ContentBox';
import { Heading } from 'components/Heading';
import { Base } from 'components/Base';

const About = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, image },
      html,
    },
  } = data;

  // TODO: alt, req image size
  return (
    <Layout>
      <Box mt={[8, 16, 30]} mb={[32, 72]} width={[null, null, null, '95%']}>
        <Box mr={[8, 16, 86, 0]} ml={[8, 16, 86, 106]}>
          <ContentBoxWithImage
            imageUrl={image}
            alt="story image"
          >
            <Heading>{title}</Heading>
            <Base content={html} />
          </ContentBoxWithImage>
        </Box>
      </Box>
    </Layout>
  );
};

About.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default About;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`;
