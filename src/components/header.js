import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #fbfbfb;
  margin-bottom: 1.45rem;
  border-bottom: 2px solid #dedede;

  div {
    margin-left: 2%;
    max-width: 960;
    padding: 20px;
  }

  h2 {
    margin-bottom: 0;
  }
`;

const Header = () => (
  <StyledHeader>
    <div>
      <h2>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          QJ
        </Link>
      </h2>
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
