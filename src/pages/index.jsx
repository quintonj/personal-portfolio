import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import 'font-awesome/css/font-awesome.min.css';
import me2 from '../images/me2.png';
import roadiethumbnail from '../images/roadiethumbnail.png';
import homedepotthumbnail from '../images/homedepotthumbnail.png';
import wayfarerthumbnail from '../images/wayfarerthumbnail.png';
import atlantastreetart from '../images/atlantastreetart.png';
import lanternthumbnail from '../images/lantern.png';
import foodfightthumbnail from '../images/foodfightfull.png';
import starthumbnail from '../images/starthumbnail.png';
import coffeethumbnail from '../images/coffeethumbnail.png';

// Hero Image Styling
const Intro = styled.div`
  background-color: #1fe0ac;
  margin-bottom: 5%;

  @media screen and (max-width: 600px) {
    margin-bottom: 50px;
  }

  div {
    div {
      div {
        h3 {
          text-transform: none;
        }
        padding: 50px;

        @media screen and (min-width: 1100px) {
          padding: 80px;
        }
      }
    }

    img {
      max-width: 75%;
      margin-bottom: 60px;

      @media screen and (min-width: 1100px) {
        max-width: 75%;
        margin-bottom: 60px;
        margin-top: 100px;
      }
    }
  }
}
`;

// One portfolio item styling
const PortfolioItem = styled.div`
  margin-bottom: 50px;

  h4 {
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

/**
 * Home page for when a user first enters the site
 */
const IndexPage = () => (
  <Layout>
    <SEO title="Quinton Johnson" keywords={[`Quinton Johnson`, `UX`, `Designer`]} />

    {/* Hero Image */}
    <Intro>
      <div className="wrapper">
        <div className="headerCol">
          <div>
            <h1>
              Quinton
              <br />
              Johnson
            </h1>
            <h3>UX Designer at Roadie.</h3>
            <h5>
              I‘m a designer and developer based in Atlanta. I love connecting with people and
              creating meaningful experiences that solve their problems. I also love my dog, so
              sometimes I just like connecting with him.
            </h5>
          </div>
        </div>
        <div className="headerCol">
          <img alt="" src={me2} />
        </div>
      </div>
    </Intro>

    {/* Portfolio Section */}
    <h2 className="sectionHeader" id="portfolio">
      Portfolio
    </h2>

    {/* Roadie */}
    <PortfolioItem>
      <div className="wrapper">
        <div className="col2">
          <h3>
            <Link to="/work/roadie">UX Designer - Roadie</Link>
          </h3>
          <h5 className="projectDesc"> UI / UX • September 2019 - Present</h5>
        </div>
        <div className="col2">
          <h4 className="projectWriting">
            Assisting Roadie in impacting the gig industry as a designer for their web app.
          </h4>
          <Link className="caseLink" to="/work/homedepot">
            View Case Study
          </Link>
        </div>
        <div className="col4">
          <Link to="/work/roadie">
            <img alt="" src={roadiethumbnail} />
          </Link>
        </div>
      </div>
    </PortfolioItem>

    {/* Home Depot */}
    <PortfolioItem>
      <div className="wrapper">
        <div className="col2">
          <h3>
            <Link to="/work/homedepot">UX Designer - The Home Depot</Link>
          </h3>
          <h5 className="projectDesc"> UI / UX • June 2018 - September 2019</h5>
        </div>
        <div className="col2">
          <h4 className="projectWriting">
            Worked as a UX Designer at The Home Depot as a part of the Enterprise UX team.
          </h4>
          <Link className="caseLink" to="/work/homedepot">
            View Case Study
          </Link>
        </div>
        <div className="col4">
          <Link to="/work/homedepot">
            <img alt="" src={homedepotthumbnail} />
          </Link>
        </div>
      </div>
    </PortfolioItem>

    {/* Wayfarer */}
    <PortfolioItem>
      <div className="wrapper">
        <div className="col2">
          <h3>
            <Link to="/work/wayfarer">Wayfarer Mockup</Link>
          </h3>
          <h5 className="projectDesc">UI / UX • Fall 2017</h5>
        </div>
        <div className="col2">
          <h4 className="projectWriting">
            Designed a mockup for an app with a gamified hiking experience that utilizes audio cues.
          </h4>
          <Link className="caseLink" to="/work/wayfarer">
            View Case Study
          </Link>
        </div>
        <div className="col4">
          <Link to="/work/wayfarer">
            <img alt="" src={wayfarerthumbnail} />
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
          <h5 className="projectDesc">UI / UX, Development • Spring 2017</h5>
        </div>
        <div className="col2">
          <h4 className="projectWriting">
            Created an Android app that allows users to explore street art throughout Atlanta.
          </h4>
          <Link className="caseLink" to="/work/atlantastreetart">
            View Case Study
          </Link>
        </div>
        <div className="col4">
          <Link to="/work/atlantastreetart">
            <img alt="" src={atlantastreetart} />
          </Link>
        </div>
      </div>
    </PortfolioItem>

    {/* More Projects Section */}
    <h2 className="sectionHeader" id="portfolio">
      More Projects
    </h2>

    <PortfolioItem>
      <div className="wrapper">
        {/* Food Fight */}
        <div className="col2">
          <Link to="/work/foodfight">
            <img alt="" src={foodfightthumbnail} />
          </Link>
          <h3>
            <Link to="/work/foodfight">Food Fight</Link>
          </h3>
          <h4 className="projectWriting">
            Constructed a multiplayer action game that is controlled with two custom Arduino
            controllers.
          </h4>
          <h5 className="projectDesc">Game Design, UI / UX, Development • Fall 2017</h5>
        </div>

        {/* Lantern */}
        <div className="col2">
          <Link to="/work/lantern">
            <img alt="" src={lanternthumbnail} />
          </Link>
          <h3>
            <Link to="/work/lantern">Lantern - The Home Depot</Link>
          </h3>
          <h4 className="projectWriting">
            Worked as a front-end engineering intern to develop an analytics dashboard with
            React.js.
          </h4>
          <h5 className="projectDesc">Development, UI / UX • Summer 2017</h5>
        </div>

        {/* STAR */}
        <div className="col2">
          <Link to="/work/star">
            <img alt="" src={starthumbnail} />
          </Link>
          <h3>
            <Link to="/work/star">STAR</Link>
          </h3>
          <h4 className="projectWriting">
            Developed an Android app that allows users that are hard of hearing to have improved
            conversations with others.
          </h4>
          <h5 className="projectDesc">Development, UI / UX • Spring 2017</h5>
        </div>

        {/* Coffee */}
        <div className="col2">
          <Link to="/work/coffee">
            <img alt="" src={coffeethumbnail} />
          </Link>
          <h3>
            <Link to="/work/coffee">Guide to Brewing Coffee</Link>
          </h3>
          <h4 className="projectWriting">
            Drew up a poster based off of several user research sessions using ethnographic methods.
          </h4>
          <h5 className="projectDesc">Graphic Design, UX • Spring 2017</h5>
        </div>
      </div>
    </PortfolioItem>
  </Layout>
);

export default IndexPage;
