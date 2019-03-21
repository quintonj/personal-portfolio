import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';
import '../styles/styles.scss';

/**
 * Layout component used to organize content across all pages
 */
const Content = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 1275px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const Layout = ({ children }) => (
  <div>
    <Content>
      <Header className="header" />
      {children}
    </Content>
    <Footer className="footer" />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
