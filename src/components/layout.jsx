import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './navbar';
import Footer from './footer';
import './layout.css';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
