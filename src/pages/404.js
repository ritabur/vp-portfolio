import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Layout } from 'components/Layout';
import { Box } from 'components/Box';
import { ContentBox } from 'components/ContentBox';
import { Heading } from 'components/Heading';
import { Base } from 'components/Base';
import { useAppContext } from 'context/AppContext';
import { t } from 'utils/translations';
import { goHome } from 'utils/routing';
import SignalIcon from 'assets/signal.svg';

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 20px;
  color: ${props => props.theme.colors.bodyPrimary};
  font-size: ${props => props.theme.fontSizes.medium};
`;

const NotFoundPage = () => {
  const { selectedLanguage } = useAppContext();

  return (
    <Layout>
      <Box mt={[8, 16, 30]} mb={[32, 72]} width={[null, null, null, '95%']}>
        <Box mr={[8, 16, 86, 0]} ml={[8, 16, 86, 106]} textAlign="center">
          <ContentBox>
            <Box mb={30}>
              <SignalIcon height={200} />
            </Box>
            <Heading>{t('404Title')}</Heading>
            <Base content={t('404Content')} />
            <StyledLink to={goHome(selectedLanguage)}>
              {t('homepage')}
            </StyledLink>
          </ContentBox>
        </Box>
      </Box>
    </Layout>
  );
};

export default NotFoundPage;
