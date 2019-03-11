import React from 'react';
import styled from 'styled-components';
import variables from '../styles/variables.scss';

const StyledFooter = styled.footer`
  background-color: #fbfbfb;

  hr {
    border-top: 2px solid #dedede;
    margin-left: 37%;
    margin-right: 37%;
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

  p {
    color: ${variables.colorMutedText};
    font-size: ${variables.textsm};
  }

  a {
    text-decoration: none;
    height: 40px;
    width: 40px;
    padding: 7px;
    border-radius: 100%;
    font-size: ${variables.textsm};
  }

  a:visited {
    color: ${variables.colorMutedText};
  }

  a:hover {
    transition: all 0.5s;
    background-color: rgba(253, 85, 35, 0.7);
  }
`;

const Footer = () => (
  <StyledFooter>
    <hr />
    <p align="center">Made with &hearts; and coffee in Atlanta</p>
    <div>
      <div>
        <div>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/quinton-johnson-a0a6497b/">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://github.com/quintonj">
                <i className="fa fa-github" />
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/quintonj">
                <i className="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/quintonbjohnson/">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/user/1246887391?si=By3WkPL1QmGsxGV1xHhwew">
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
