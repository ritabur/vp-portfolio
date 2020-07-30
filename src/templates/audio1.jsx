import * as React from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'components/Layout';
import { Box } from 'components/Box';
import { ContentBoxWithImage } from 'components/ContentBox';
import { Heading } from 'components/Heading';
import { Base } from 'components/Base';
import { GoBack } from 'components/GoBack';
import { SEO } from 'components/SEO';

const Audio1 = ({ data }) => {
    const {
        markdownRemark: {
            frontmatter: { title, link, fullDescription, image },
        },
    } = data;

    // image min-width: 840px
    return (
        <Layout>
            <SEO title={title}/>
            <Box mt={[8, 16, 30]} mb={[32, 72]} width={[null, null, null, '95%']}>
                <Box mr={[8, 16, 86, 0]} ml={[8, 16, 86, 106]}>
                    <GoBack to="Audio" />
                    <ContentBoxWithImage image={image.childImageSharp.fluid} alt={title}>
                        <Heading>{title}</Heading>
                        <Base content={fullDescription} />
                        <Box pt={16}>
                            <Base content={`Link to audio: <a href="${link}">${link}</a>`} />
                        </Box>
                    </ContentBoxWithImage>
                </Box>
            </Box>
        </Layout>
    );
};

export default Audio1;

export const pageQuery = graphql`
    query AudioByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                link
                fullDescription
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
