import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

const Intro = styled.div`
  background-color: #1fe0ac;
  margin-left: 25px;
  margin-right: 25px;
  min-height: 625px;
`;

const Portfolio = styled.h2`
  margin-top: 100px;
  margin-left: 50px;
  border-left: 5px solid #fd5523;
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
        <p>
          I'm a designer and developer based in Atlanta. Passionate about
          connecting with people and creating meaningful experiences that solve
          problems.
        </p>
        <p />
      </Layout>
    </Intro>
    <Layout>
      <Portfolio>Portfolio</Portfolio>
    </Layout>
    <Footer />
  </div>
);

export default IndexPage;
