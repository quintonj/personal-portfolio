/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import styled from 'styled-components';

const Content = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 1200px) {
    margin-left: 100px;
    margin-right: 100px;
  }
`;

const Layout = ({ children }) => (
  <div>
    <Header className="header" />
    <Content>{children}</Content>
    <Footer className="footer" />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
