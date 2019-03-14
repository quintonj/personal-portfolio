import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import variables from '../styles/variables.scss';
import 'font-awesome/css/font-awesome.min.css';
import me2 from '../images/me2.png';
import homedepot from '../images/homedepot.png';
import wayfarer from '../images/wayfarer.png';
import atlantastreetart from '../images/atlantastreetart.png';
import lanternthumbnail from '../images/lantern.png';
import foodfightthumbnail from '../images/foodfightfull.png';
import starthumbnail from '../images/starthumbnail.png';
import coffeethumbnail from '../images/coffeethumbnail.png';
import { Link } from 'gatsby';

// Hero Image Styling
const Intro = styled.div`
  background-color: rgba(31, 224, 172, 0.7);
  margin-bottom: 75px;

  div {
    div {
      div {
        h3 {
          text-transform: none;
        }
        padding: 50px;

        @media screen and (min-width: 1200px) {
          padding: 80px;
          margin-top: 60px;
        }
      }
    }

    img {
      max-width: 75%;
      margin-bottom: 60px;

      @media screen and (min-width: 1200px) {
        max-width: 75%;
        margin-bottom: 60px;
        margin-top: 80px;
      }
    }
  }

  a {
    i {
      font-size: 4em;
      color: ${variables.colorHeadings};
    }
  }
}
`;

// Section header styling i.e. "Portfolio"
const SectionHeader = styled.h2`
  border-left: 5px solid ${variables.colorPrimary};
  padding-left: 20px;
`;

// One portfolio item styling
const PortfolioItem = styled.div`
  margin-bottom: 50px;

  h5 {
    color: ${variables.colorMutedText};
  }

  h4 {
    font-size: ${variables.textbasesize}
    color: ${variables.colorMutedText};
  }

  img:hover {
    opacity: 1;
    transition: 0.3s ease;
  }

  a {
    img {
      margin-bottom: 20px;
    }
  }
`;

// Link for "view case study" styling
const CaseLink = styled(Link)`
  font-size: ${variables.textsm};
`;

const IndexPage = () => (
  <Layout>
    <SEO
      title="Quinton Johnson"
      keywords={[`Quinton Johnson`, `UX`, `Designer`]}
    />

    {/* Hero Image */}
    <Intro>
      <div className="wrapper">
        <div className="headerCol">
          <div>
            <h1>
              Quinton <br /> Johnson
            </h1>
            <h3>UX Designer at The Home Depot.</h3>
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
        <div className="headerCol">
          <img src={me2} />
        </div>
      </div>
    </Intro>

    {/* Portfolio Section */}
    <SectionHeader id="portfolio">Portfolio</SectionHeader>

    {/* Home Depot */}
    <PortfolioItem>
      <div className="wrapper">
        <div className="col2">
          <h3>
            <Link to="/work/homedepot">Home Depot - UX Designer</Link>
          </h3>
          <h5>UI / UX • 2018 - Present</h5>
        </div>
        <div className="col2">
          <h4>
            Working as a UX Designer at The Home Depot as a part of the
            Enterprise UX team.
          </h4>
          <CaseLink to="/work/homedepot">View Case Study</CaseLink>
        </div>
        <div className="col4">
          <Link to="/work/homedepot">
            <img src={homedepot} />
          </Link>
        </div>
      </div>
    </PortfolioItem>

    {/* Wayfarer */}
    <PortfolioItem>
      <div className="wrapper">
        <div className="col2">
          <h3>
            <Link to="/work/wayfarer">Wayfarer App Mockup</Link>
          </h3>
          <h5>UI / UX • Fall 2017</h5>
        </div>
        <div className="col2">
          <h4>
            Created a mockup for an app with a gamified hiking experience that
            utilizes audio cues.
          </h4>
          <CaseLink to="/work/wayfarer">View Case Study</CaseLink>
        </div>
        <div className="col4">
          <Link to="/work/wayfarer">
            <img src={wayfarer} />
          </Link>
        </div>
      </div>
    </PortfolioItem>

    {/* Atlanta Street Art Project */}
    <PortfolioItem>
      <div className="wrapper">
        <div className="col2">
          <h3>
            <Link to="/work/atlantastreetart">Atlanta Street Art Project</Link>
          </h3>
          <h5>UI / UX, Android Development • Spring 2017</h5>
        </div>
        <div className="col2">
          <h4>
            Designed and developed an Android app that allows users to explore
            street art throughout Atlanta.
          </h4>
          <CaseLink to="/work/atlantastreetart">View Case Study</CaseLink>
        </div>
        <div className="col4">
          <Link to="/work/atlantastreetart">
            <img src={atlantastreetart} />
          </Link>
        </div>
      </div>
    </PortfolioItem>

    {/* More Projects Section */}
    <SectionHeader id="portfolio">More Projects</SectionHeader>

    <PortfolioItem>
      <div className="wrapper">
        {/* Food Fight */}
        <div className="col2">
          <Link to="/work/foodfight">
            <img src={foodfightthumbnail} />
          </Link>
          <h3>
            <Link to="/work/foodfight">Food Fight</Link>
          </h3>
          <h4>
            A multiplayer action game that is controlled with two custom Arduino
            controllers.
          </h4>
          <h5>Game Design • Fall 2017</h5>
        </div>

        {/* Lantern */}
        <div className="col2">
          <Link to="/work/lantern">
            <img src={lanternthumbnail} />
          </Link>
          <h3>
            <Link to="/work/lantern">Home Depot - Lantern</Link>
          </h3>
          <h4>
            Worked as a front-end engineering intern to develop an analytics
            dashboard with React.js.
          </h4>
          <h5>Frontend development, UI / UX • Summer 2017</h5>
        </div>

        {/* STAR */}
        <div className="col2">
          <Link to="/work/star">
            <img src={starthumbnail} />
          </Link>
          <h3>
            <Link to="/work/star">STAR</Link>
          </h3>
          <h4>
            An Android app that allows users that are hard of hearing to have
            improved conversations with others.
          </h4>
          <h5>Android Development • Spring 2017</h5>
        </div>

        {/* Coffee */}
        <div className="col2">
          <Link to="/work/coffee">
            <img src={coffeethumbnail} />
          </Link>
          <h3>
            <Link to="/work/coffee">Guide to Brewing Coffeee</Link>
          </h3>
          <h4>
            A poster made based off of several user research sessions using
            ethnographic methods.
          </h4>
          <h5>Graphic Design, User Research • Spring 2017</h5>
        </div>
      </div>
    </PortfolioItem>
  </Layout>
);

export default IndexPage;
