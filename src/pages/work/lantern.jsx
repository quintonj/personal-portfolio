import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import board from '../../images/lantern.png';

const Lantern = () => (
  <Layout>
    <SEO title="Home Depot Lantern" />
    <div className="wrapper">
      <div className="col4">
        <h1>Home Depot - Lantern</h1>
      </div>
      <div className="col2">
        <h3 className="lead-in">
          Worked as a front-end developer during a summer internship for The Home Depot.
        </h3>
      </div>
      <div className="col1">
        <h4>Role</h4>
        <h5>Front-end Engineering Intern</h5>
      </div>
      <div className="col1">
        <h4>Category</h4>
        <h5>Front-end development, UI / UX</h5>
      </div>
      <div className="col4">
        <div className="headerImgCol">
          <img alt="" src={board} />
        </div>
      </div>
      <div className="col4 workContent">
        <h2 className="sectionName">The Problem</h2>
        <p>
          The contact centers collect a lot of data on interactions (timestamps, transcripts,
          disposition categories, etc) but it is largely unused. There exists a need for an
          analytics tool to look at the big picture of what customers are contacting us about and
          why.
        </p>
        <h2 className="sectionName">The Product</h2>
        <p>
          Over the course of summer 2017, I was a Software Engineering Intern for The Home Depot.
          Within a group of seven interns, I held responsibility for developing the front-end for a
          data analytics web application for the Contact Center Experience Team. To develop the
          front-end, I utilized HTML, CSS, and JavaScript, as well as React.js as a front-end
          library. I also had a prominent part in the design and user research for the application.
          The application aggregates and displays common categories that customers chat about with
          Home Depot Support. Users of the application can narrow down their results by applying
          filters to categories they select and eventually reach individual chat transcripts to
          understand customers‘ problems.
        </p>
        <h2 className="sectionName">The Process</h2>
        <h4>User Research</h4>
        <p>
          The project itself started off as a conceptual idea to visualize support data. Thus, our
          team carried the app from inception to several iterations of implementation. We began with
          developing personas as well as ideating use cases. This allowed us to organize our ideas
          and cater to the stakeholders‘ wishes for the project. To better understand the needs of
          the support agents and potential users, I observed a Home Depot call center and sat in on
          user interviews. With a better understanding of our users‘ needs, we were able to create a
          well-defined problem statement for the users:
        </p>
        <p>
          &#34;The contact centers collect a lot of data on interactions (timestamps, transcripts,
          disposition categories, etc) but it is largely unused. There exists a need for an
          analytics tool to look at the big picture of what customers are contacting us about and
          why&#34;
        </p>
        <h4>Feature Ideation</h4>
        <p>
          With a problem statement in mind and user research at hand, we were able to ideate
          features and develop a 2x2 matrix. This matrix contained features mapped based on
          difficulty to implement versus importance to the user. In addition to this, I participated
          in several design studios to create lo-fidelity mockups for the application. I also
          participated in a design critique of hi-fidelity mockups that were created for the
          application. Finally, we conducted usability tests with an interactive InVision prototype.
        </p>
        <h4>Implementation</h4>
        <p>
          Throughout this process, I took the feedback from our designs and translated that to our
          implementation. With the several interviews, observations, and usability tests our team
          completed, we were able to have a solid foundation to create a polished and valuable
          application. Ultimately, we implemented a large portion of the proposed features. At the
          end of the internship, our team was one of the few chosen to present a project in front of
          the Senior Vice President for Technology at The Home Depot.
        </p>
        <h2 className="sectionName">The Reflection</h2>
        <p>
          While working on this project, I was able to have a hand in multiple facets of the
          development and design process. This allowed me to learn a lot of new skills, such as
          pushing an application to production within an enterprise and creating feature boards.
          Ultimately, I gained a couple of key insights after the completion of the project:
        </p>
        <p>
          (1) Be open-minded and don‘t get stuck on one path. When we initially began, we started
          with the idea that our users would be Contact Center supervisors or managers. However,
          through our user interviews and research, we learned that it would be much more valuable
          for Contact Center directors to use the application and share useful information. This
          taught me to be adaptable and understand how to maneuver with the changes in a project‘s
          requirements.
        </p>
        <p>
          (2) Ensure that every member of the team is on the same page through consistent
          communication. Two members of our team worked remotely from Austin. Therefore, we had some
          initial issues with keeping them up-to-date with the most recent information. As a
          solution, we utilized Slack, Pivotal Tracker, and daily standup meetings to make sure that
          each team member was aware of what others were currently working on.
        </p>
      </div>
    </div>
  </Layout>
);

export default Lantern;
