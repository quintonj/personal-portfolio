import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #fbfbfb;

  hr {
    border-top: 2px solid #dedede;
    margin-left: 17%;
    margin-right: 17%;
    @media screen and (min-width: 1100px) {
      margin-left: 40%;
      margin-right: 40%;
    }
  }

  div {
    text-align: center;
  }

  ul {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10px;
    list-style: none;
  }

  li {
    float: center;
    display: inline-block;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    height: 40px;
    width: 40px;
    padding: 7px;
    border-radius: 100%;
  }

  a:hover {
    transition: all 0.5s;
    background-color: rgba(253, 85, 35, 0.7);
  }
`;

const Footer = () => (
  <StyledFooter>
    <hr />
    <h5 className="footerText" align="center">
      Made with &hearts; and coffee in Atlanta
    </h5>
    <div>
      <div>
        <div>
          <ul>
            <li>
              <a
                className="footerText"
                href="https://www.linkedin.com/in/quinton-johnson-a0a6497b/"
              >
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a className="footerText" href="https://github.com/quintonj">
                <i className="fa fa-github" />
              </a>
            </li>
            <li>
              <a className="footerText" href="https://dribbble.com/quintonj">
                <i className="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a className="footerText" href="https://www.instagram.com/quintonbjohnson/">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a
                className="footerText"
                href="https://open.spotify.com/user/1246887391?si=By3WkPL1QmGsxGV1xHhwew"
              >
                <i className="fa fa-spotify" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </StyledFooter>
);

export default Footer;
