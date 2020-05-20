import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import roadie from '../../images/roadiethumbnail.png';

const Roadie = () => (
  <Layout>
    <SEO title="Roadie" />
    <div className="wrapper headerSection">
      <div className="col4">
        <h1>UX Designer - Roadie</h1>
      </div>
      <div className="col2">
        <h3 className="lead-in">
          Assisting Roadie in impacting the gig industry as a designer for the web experience.
        </h3>
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
    </div>
    <div className="wrapper contentSection ">
      <div className="col4 workContent">
        <h2 className="sectionName">The Problem</h2>
        <p>
          I joined Roadie in the fall of 2019 during a time of transition. The first Roadie app was
          developed by Big Nerd Ranch in Atlanta, Georgia after the initial idea came to the CEO,
          Marc Gorlin, in 2014. While the preexisting app worked well and garnered a lot of traffic
          from users, it hindered Roadie&apos;s ability to grow. Because of this, resources were put
          into transitioning from the initial app to our new app which would serve as a foundation
          for Roadie&apos;s future growth. I joined Roadie and assisted with this transition and
          have been adding features and designing exciting ideas for the app ever since. Ultimately,
          we want to ensure that Roadie&apos;s drivers, senders, and recipients are all satisfied
          with the platform and that we build the best product we possibly can.
        </p>
        <h2 className="sectionName">The Product</h2>
        <p>
          Roadie is a delivery service with a focus on last-mile delivery. A variety of enterprise
          partners, such as The Home Depot and Delta, work with Roadie to handle the delivery of
          items. Since its inception, Roadie has delivered over one million gigs and continues to
          grow. As mentioned, I joined the team during the transition to the new app. The product
          team spent much of 2019 and 2020 ensuring that both drivers and senders were able to
          transition to the new experience seamlessly. To help facilitate this change, I created
          appealing new features for users. These changes included adding the ability to search
          through senders&apos; past gigs, an overhaul of the web portal for senders to ensure that
          the site was responsive, and a revamping of the tip section during the process of creating
          a gig.
        </p>
      </div>
    </div>
  </Layout>
);

export default Roadie;
