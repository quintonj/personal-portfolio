import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import variables from '../styles/variables.scss';
import 'font-awesome/css/font-awesome.min.css';

const Intro = styled.div`
  background-color: ${variables.colorSecondary};
  margin-left: 25px;
  margin-right: 25px;
  min-height: 625px;
  a {
    i {
      font-size: 4em;
      color: ${variables.colorHeadings};
    }
  }
`;

const PortfolioHeader = styled.h2`
  margin-top: 100px;
  margin-left: 20px;
  border-left: 5px solid ${variables.colorPrimary};
  padding-left: 20px;
`;

const IndexPage = () => (
  <div>
    <Header />
    <Intro>
      <Layout>
        <SEO keywords={[`Quinton Johnson`, `UX`, `Designer`]} />
        <h1>Quinton Johnson</h1>
        <h3>UX Designer at The Home Depot.</h3>
        <h4>
          I'm a designer and developer based in Atlanta. Passionate about
          connecting with people and creating meaningful experiences that solve
          problems.
        </h4>
        <a href="#portfolio">
          <i class="fa fa-angle-down" />
        </a>
      </Layout>
    </Intro>
    <Layout>
      <PortfolioHeader id="portfolio">Portfolio</PortfolioHeader>
    </Layout>
    <Footer />
  </div>
);

export default IndexPage;
