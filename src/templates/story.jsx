import * as React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from 'components/Layout';
import { Box } from 'components/Box';
import { ContentBoxWithImage } from 'components/ContentBox';
import { Heading } from 'components/Heading';
import { Base } from 'components/Base';
import { GoBack } from 'components/GoBack';
import { SEO } from 'components/SEO';

const Story = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, date, image },
      html,
    },
  } = data;

  // image min-width: 840px
  return (
    <Layout>
      <SEO title={title} image={image.childImageSharp.fluid.src} />
      <Box mt={[8, 16, 30]} mb={[32, 72]} width={[null, null, null, '95%']}>
        <Box mr={[8, 16, 86, 0]} ml={[8, 16, 86, 106]}>
          <GoBack to="Stories" />
          <ContentBoxWithImage
            image={image.childImageSharp.fluid}
            alt={title}
            footerContent={date}
          >
            <Heading>{title}</Heading>
            <Base content={html} />
          </ContentBoxWithImage>
        </Box>
      </Box>
    </Layout>
  );
};

Story.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Story;

export const pageQuery = graphql`
  query StoryByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`;
