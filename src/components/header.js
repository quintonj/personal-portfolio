import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import variables from '../styles/variables.scss';

const StyledHeader = styled.header`
  background-color: #fbfbfb;
  margin-left: 30px;
  margin-right: 50px;

  div {
    max-width: 960;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  h3 {
    margin-bottom: 0;
    color: ${variables.colorHeadings};
  }

  i {
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: fixed;
    top: 25px;
    right: 30px;
    z-index: 1000;
    color: ${variables.colorHeadings};
  }
`;

const Header = () => (
  <StyledHeader>
    <div>
      <h3>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          QJ
        </Link>
      </h3>
      <i className="fa fa-bars" />
    </div>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
