import * as React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalResetStyle } from 'lib/cssResets';
import { MobileNavbar } from 'components/MobileNavbar';
import { Footer } from 'components/Footer';
import { Box } from 'components/Box';
import { DesktopNavbar } from 'components/DesktopNavbar';
import { LanguageSwitch } from 'components/LanguageSwitch';
import theme from 'theme';

const StyledLanguageSwitch = styled(LanguageSwitch)`
  position: absolute;
  right: 20%;
`;

// TODO: use react breakpoint lib not to render header
export const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalResetStyle />
    <Box minWidth={320} color="bodyPrimary" fontFamily="primary">
      <Box display={['block', 'block', 'block', 'none']}>
        <MobileNavbar />
      </Box>

      <Box margin="0 auto">
        <Box
          maxWidth={['none', null]}
          width={['100%', null, null, '70%']}
          display={['block', null, null, 'inline-block']}
          verticalAlign="top"
        >
          <Box as="main" ml={[null, null, null, 'auto']}>
            {children}
          </Box>
          <Box
            pb={20}
            pl={[0, null, null, 20]}
            mx={[8, 16, null, 0]}
            as="footer"
          >
            <Footer />
          </Box>
        </Box>

        <Box
          width="30%"
          height="100vh"
          display={['none', null, null, 'inline-block']}
          verticalAlign="top"
          position="fixed"
        >
          <StyledLanguageSwitch />
          <DesktopNavbar />
        </Box>
      </Box>
    </Box>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
