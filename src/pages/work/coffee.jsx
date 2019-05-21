import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import coffeefull from '../../images/coffeefull.png';
import coffeejournal from '../../images/coffeejournal.png';

const Coffee = () => (
  <Layout>
    <SEO title="Coffee" />
    <div className="wrapper">
      <div className="col4">
        <h1>Guide to Brewing Coffee</h1>
      </div>
      <div className="col2">
        <h3 className="lead-in">
          A poster design based on user research that describes how to brew a cup of coffee.
        </h3>
      </div>
      <div className="col1">
        <h4>Role</h4>
        <h5>Graphic Designer</h5>
      </div>
      <div className="col1">
        <h4>Category</h4>
        <h5>Graphic Design, User Research</h5>
      </div>
      <div className="col4">
        <div className="imgCol">
          <img alt="" src={coffeefull} />
        </div>
      </div>
      <div className="col4 workContent">
        <h2 className="sectionName">The Problem</h2>
        <p>
          Brewing coffee is a lengthy process with a multitude of methods that are complex and
          difficult to explain.
        </p>
        <h2 className="sectionName">The Product</h2>
        <p>
          This poster design was the result of several ethnographic observation sessions with a
          coffee enthusiast. It was created using Photoshop with Gestalt Principles in mind. During
          these sessions, I wrote notes, drew sketches, and took pictures to understand the process.
          Following this, I compiled and analyzed my notes to gain insights from the user and
          designed this poster to show my findings.
        </p>
        <h2 className="sectionName">The Process</h2>
        <p>
          The initial development of the poster required user research. Therefore, I grabbed a
          friend who is a coffee enthusiast and asked to observe him for his normal coffee routine.
          This gave me the opportunity to survey his procedure and how he handled making a quality
          cup of coffee. I utilized an AEIOU framework: activities, environment, interactions,
          objects, and users. This allowed me to capture all of the elements that were involved with
          my friend’s process. Throughout this, I also took pictures and jotted down notes in my
          notebook.
        </p>
        <div className="imgCol">
          <img alt="" src={coffeejournal} />
        </div>
        <p>
          With the user research completed over a couple of scenarios, I reflected on my findings.
          This allowed me to distill one key insight – “It is necessary to take grind size, weight
          of the beans, weight of the water, and temperature of the water into account when creating
          the perfect cup of coffee”. With this one key insight, I began to design around it by
          creating an infographic for a step-by-step brewing guide.
        </p>
        <h2 className="sectionName">The Reflection</h2>
        <p>
          This project allowed me to work on my observation skills and reflects a process I still
          use this day to ensure all of my designs are backed by research and well thought out. This
          resulted in an important finding for me:
        </p>
        <p>
          Quality research leads to quality designs. Completing user research allows the designer to
          identify and analyze all aspects of a problem to ensure that the design correctly
          addresses the user’s pain points and creates a seamless experience. After all, that’s what
          design is all about; create a design that will be intuitive and solve problems.
        </p>
      </div>
    </div>
  </Layout>
);

export default Coffee;
