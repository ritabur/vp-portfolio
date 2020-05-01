import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { GlobalResetStyle } from 'lib/cssResets';
import Navbar from './navbar';
import Footer from './footer';
import { Box } from './box';
import theme from '../theme';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalResetStyle />
    <Box minWidth={320} color="bodyPrimary" fontFamily="primary">
      <Box display={['block', 'block', 'block', 'none']}>
        <Navbar />
      </Box>
      <Box as="main" maxWidth={1200} margin="0 auto" pt={20}>
        {children}
      </Box>
      <Box maxWidth={930} mb={20} ml={20}>
        <Footer />
      </Box>
    </Box>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
