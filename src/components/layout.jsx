import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';
import '../styles/styles.scss';

const Content = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 1275px) {
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
  children: PropTypes.node.isRequired
};

export default Layout;
