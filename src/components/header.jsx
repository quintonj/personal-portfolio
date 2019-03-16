import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

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
  }

  i {
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: fixed;
    top: 25px;
    right: 30px;
    z-index: 1000;
  }
`;

const Header = () => (
  <StyledHeader>
    <div>
      <h3 className="headerText">
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`
          }}
        >
          QJ
        </Link>
      </h3>
    </div>
  </StyledHeader>
);

export default Header;
