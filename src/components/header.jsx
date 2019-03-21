import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Resume from '../assets/Resume.pdf';

/**
 * Header component for access to other pages as well as return to home screen <Link>
 */
const StyledHeader = styled.header`
  background-color: #fbfbfb;

  div {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  ul {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0px;
    list-style: none;
  }

  li {
    float: center;
    display: inline-block;
    margin: 0;
  }

  h3 {
    margin-bottom: 0;
  }

  h5 {
    margin-left: 40px;
    text-transform: uppercase;
  }
`;

const Header = () => (
  <StyledHeader>
    <div>
      <ul>
        <li>
          <h3>
            <Link to="/">QJ</Link>
          </h3>
        </li>
        <li>
          <h5>
            <Link to="/about">About</Link>
          </h5>
        </li>
        <li>
          <h5>
            <a href={Resume}>Resume</a>
          </h5>
        </li>
      </ul>
    </div>
  </StyledHeader>
);

export default Header;
