import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { sanitize } from 'dompurify';

import { Box } from 'components/Box';
import { Layout } from 'components/Layout';
import { ContentBoxWithImage } from 'components/ContentBox';
import { Heading } from 'components/Heading';
import { Base } from 'components/Base';

const About = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  } = data;

  // TODO: take image and alt from cms
  return (
    <Layout>
      <Box mt={[8, 16, 30]} mb={[32, 72]} width={[null, null, null, "85%"]}>
        <Box mr={[8, 16, 86, 106]} ml={[8, 16, 86, 106]} >
          <ContentBoxWithImage imageUrl="https://images.squarespace-cdn.com/content/v1/59bad530f43b55edcb5214f4/1581948189752-I3FEJRWXU01TOUID1RHI/ke17ZwdGBToddI8pDm48kBMHBux6YLloQo9VnD0ji-d7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mhydAgiKdIfeAoxVgE7c7oEyYWj_Ixra01q53fBqVWvV3h6MQ3CX2m9brj2DWdW0Q/leaves?format=2500w" alt="story image">
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
      }
    }
  }
`;
