import * as React from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'components/Layout';
import { Box } from 'components/Box';
import { ContentBox } from 'components/ContentBox';
import { ThumbnailList } from 'components/ThumbnailList';
import { Heading } from 'components/Heading';
import { Base } from 'components/Base';

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
          <Box mt={[30, 40]}>
            <ThumbnailList
              contentList={audioList}
              title="test"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dicta dolores ex, harum ipsum labore laudantium quas quod, reiciendis saepe sunt, tenetur. Eius, libero minima nihil optio quibusdam soluta voluptatem."
            />
          </Box>
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
          largeImage {
            image {
              childImageSharp {
                fluid(maxWidth: 100) {
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
`;
