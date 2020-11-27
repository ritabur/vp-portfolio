import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Box } from 'components/Box';
import { Layout } from 'components/Layout';
import { ContentBoxWithImage } from 'components/ContentBox';
import { Base } from 'components/Base';
import { SEO } from 'components/SEO';
import { t } from 'utils/translations';

const About = ({ data, location }) => {
  const {
    markdownRemark: {
      frontmatter: {
        mainImage: { image, imageCredits },
      },
      html,
    },
  } = data;

  return (
    <Layout>
      <SEO
        title={t('about')}
        image={image.childImageSharp.fluid.src}
        path={location.pathname}
      />
      <Box mt={[8, 16, 30]} mb={[32, 72]} width={[null, null, null, '95%']}>
        <Box mr={[8, 16, 86, 0]} ml={[8, 16, 86, 106]}>
          <ContentBoxWithImage
            image={image.childImageSharp.fluid}
            imageCredits={imageCredits}
          >
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
        mainImage {
          imageCredits
          image {
            childImageSharp {
              fluid(maxWidth: 850) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
