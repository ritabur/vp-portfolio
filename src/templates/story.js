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
import { CommentSection } from 'components/CommentSection';

const Story = ({ pageContext, data, location }) => {
  const {
    markdownRemark: {
      frontmatter: { title, date, image, imageCredits, shortDescription },
      html,
    },
  } = data;

  // image min-width: 840px
  return (
    <Layout>
      <SEO
        title={title}
        description={shortDescription}
        image={image.childImageSharp.fluid.src}
        path={location.pathname}
      />
      <Box mt={[8, 16, 30]} mb={[32, 72]} width={[null, null, null, '95%']}>
        <Box mr={[8, 16, 86, 0]} ml={[8, 16, 86, 106]}>
          <GoBack />
          <ContentBoxWithImage
            image={image.childImageSharp.fluid}
            alt={title}
            footerContent={date}
            imageCredits={imageCredits}
          >
            <Heading>{title}</Heading>
            <Base content={html} />
          </ContentBoxWithImage>
          <CommentSection pathname={location.pathname} />
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
        shortDescription
        imageCredits
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
