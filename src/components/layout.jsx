import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import '../styles/styles.scss';

const Layout = ({ children }) => (
  <div>
    <Header className="header" />
    {children}
    <Footer className="footer" />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
