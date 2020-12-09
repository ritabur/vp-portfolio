import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from 'components/Layout';
import { Box } from 'components/Box';
import { ContentBox } from 'components/ContentBox';
import { Heading } from 'components/Heading';
import { Base } from 'components/Base';
import { SEO } from 'components/SEO';
import { t } from 'utils/translations';

const Contact = ({ data, location }) => {
  const {
    markdownRemark: { html },
  } = data;

  return (
    <Layout>
      <SEO title={t('contact')} path={location.pathname} />
      <Box mt={[8, 16, 30]} mb={[32, 72]} width={[null, null, null, '95%']}>
        <Box mr={[8, 16, 86, 0]} ml={[8, 16, 86, 106]}>
          <ContentBox>
            <Heading>{t('contact')}</Heading>
            <Base content={html} />
          </ContentBox>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
