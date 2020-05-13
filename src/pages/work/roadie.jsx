import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import roadie from '../../images/roadiethumbnail.png';

const Roadie = () => (
  <Layout>
    <SEO title="Roadie" />
    <div className="wrapper">
      <div className="col4">
        <h1>Roadie - UX Designer</h1>
      </div>
      <div className="col2">
        <h3 className="lead-in">Working as a UX Designer at Roadie with a focus on the web app.</h3>
      </div>
      <div className="col1">
        <h5>Role</h5>
        <h4>UX Designer</h4>
      </div>
      <div className="col1">
        <h5>Category</h5>
        <h4>UI / UX</h4>
      </div>
      <div className="col4">
        <div className="headerImgCol">
          <img alt="" src={roadie} />
        </div>
      </div>
      <div className="col4 workContent">
        <h2 className="sectionName">The Problem</h2>
        <p>
          I joined Roadie in the fall of 2019 during a time of transition. The initial Roadie app
          was developed by Big Nerd Ranch in Atlanta, Georgia after the initial idea came to our
          CEO, Marc Gorlin, in 2014. While the preexisting app worked well and garnered a lot of
          traffic from users, it hindered Roadie&apos;s ability to grow. Roadie built up its own
          internal product team and made the decision to make a fresh start. Because of this,
          resources were put into transitioning from the exiting app to our new app which would
          serve as a foundation for Roadie&apos;s future growth. I joined Roadie and assisted with
          this transition and have been adding features and designing exciting ideas for the app
          ever since. Ultimately we want to ensure that Roadie&apos;s drivers, senders, and
          recipients are all satisfied with the platform and that we build the best product we
          possibly can.
        </p>
      </div>
    </div>
  </Layout>
);

export default Roadie;
