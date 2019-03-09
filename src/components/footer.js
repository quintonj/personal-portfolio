import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

const StyledFooter = styled.footer`
    color: #555555;
    margin-top: 20px;
    margin-left: 36%;
    margin-right 36%;
    border-top: 2px solid rgba(0,0,0,.1);

    a {
        padding: 7px;
        border-radius: 100%;
        width: 40px;
        height: 40px;
    }

    a:visited {
        color: #555555;
    }

    a:hover {
        background-color: rgba(253, 85, 35, 0.5);
    }
`;

const Footer = () => (
  <StyledFooter>
    <p align="center">
      <br />
      Made with &hearts; and coffee in Atlanta
    </p>
    <div>
      <div>
        <div>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/quinton-johnson-a0a6497b/">
                <i class="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="https://github.com/quintonj">
                <i class="fa fa-github" />
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/quintonj">
                <i class="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/quintonbjohnson/">
                <i class="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/user/1246887391?si=By3WkPL1QmGsxGV1xHhwew">
                <i class="fa fa-spotify" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </StyledFooter>
);

export default Footer;
