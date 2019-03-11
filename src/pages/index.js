import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import variables from '../styles/variables.scss';
import 'font-awesome/css/font-awesome.min.css';
import me2 from '../images/me2.png';
import homedepot from '../images/homedepot.png';
import { Link } from 'gatsby';

const Intro = styled.div`
  background-color: ${variables.colorSecondary};
  margin-top: 30px;
  margin-bottom: 50px;

  div {
    div {
      div {
        padding: 50px;

        @media screen and (min-width: 1200px) {
          margin-top: 10%;
          padding: 80px;
        }
      }
    }
    img {
      padding: 50px;

      @media screen and (min-width: 1200px) {
        padding: 80px;
      }
    }
  }

  a {
    i {
      font-size: 4em;
      color: ${variables.colorHeadings};
    }
  }
`;

const SectionHeader = styled.h2`
  border-left: 5px solid ${variables.colorPrimary};
  padding-left: 20px;
`;

const PortfolioItem = styled.div`
  margin-bottom: 75px;

  h4,
  p {
    color: ${variables.colorMutedText};
  }

  h3,
  h5 {
    color: ${variables.colorHeadings};
    font-weight: 700;
  }
`;

const StyledLink = styled(Link)`
  font-size: ${variables.textsm};
  text-decoration: none;
  color: ${variables.colorHeadings};
  font-weight: 700;

  &:hover {
    background-color: ${variables.colorPrimary};
  }

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO
      title="Quinton Johnson"
      keywords={[`Quinton Johnson`, `UX`, `Designer`]}
    />

    <Intro>
      <div className="wrapper">
        <div className="col-md-2">
          <div>
            <h1>Quinton Johnson</h1>
            <h4>UX Designer at The Home Depot.</h4>
            <h5>
              I'm a designer and developer based in Atlanta. Passionate about
              connecting with people and creating meaningful experiences that
              solve problems.
            </h5>
            <a href="#portfolio">
              <i className="fa fa-angle-down" />
            </a>
          </div>
        </div>
        <div className="col-md-2">
          <img src={me2} />
        </div>
      </div>
    </Intro>

    <SectionHeader id="portfolio">Portfolio</SectionHeader>

    <PortfolioItem>
      <div className="wrapper">
        <div className="col-md-2">
          <h3>The Home Depot - UX Designer</h3>
          <p>UI / UX • 2018 - Present</p>
        </div>
        <div className="col-md-2">
          <h4>
            Working as a UX Designer at The Home Depot as a part of the
            Enterprise UX team.
          </h4>
          <StyledLink to="/about">View Case Study</StyledLink>
        </div>
      </div>
    </PortfolioItem>

    <PortfolioItem>
      <div className="wrapper">
        <div className="col-md-2">
          <h3>Wayfarer App Mockup</h3>
          <p>UI / UX • Fall 2017</p>
        </div>
        <div className="col-md-2">
          <h4>
            Created a mockup for an app that creates a gamified hiking
            experience and utilizes audio cues.
          </h4>
          <StyledLink to="/about">View Case Study</StyledLink>
        </div>
      </div>
    </PortfolioItem>

    <PortfolioItem>
      <div className="wrapper">
        <div className="col-md-2">
          <h3>Atlanta Street Art Project</h3>
          <p>UI / UX, Android Development • Spring 2017</p>
        </div>
        <div className="col-md-2">
          <h4>
            Designed and developed an Android app that allows users to explore
            street art throughout Atlanta.
          </h4>
          <StyledLink to="/about">View Case Study</StyledLink>
        </div>
      </div>
    </PortfolioItem>
  </Layout>
);

export default IndexPage;
