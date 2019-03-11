/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.scss';
import Header from './header';
import Footer from './footer';
import styled from 'styled-components';

const Content = styled.div`
  margin-left: 20px;
  margin-right: 20px;

  @media screen and (min-width: 1200px) {
    margin-left: 75px;
    margin-right: 75px;
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
