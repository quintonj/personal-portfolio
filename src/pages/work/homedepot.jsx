import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import homedepot from '../../images/homedepot.png';
import fleetjourney from '../../images/fleetjourney.png';
import persona from '../../images/persona.png';

const HomeDepot = () => (
  <Layout>
    <SEO title="Home Depot" />
    <div className="wrapper">
      <div className="col4">
        <h1>Home Depot - UX Designer</h1>
      </div>
      <div className="col2">
        <h3 className="lead-in">Working as a UX designer at The Home Depot.</h3>
      </div>
      <div className="col1">
        <h4>Role</h4>
        <h5>UX Designer</h5>
      </div>
      <div className="col1">
        <h4>Category</h4>
        <h5>UI / UX</h5>
      </div>
      <div className="col4">
        <div className="imgCol">
          <img alt="" src={homedepot} />
        </div>
        <h2 className="sectionName">The Product</h2>
        <p>
          Since the summer of 2018, I have been working as a UX Designer for The Home Depot. Within
          the Enterprise UX team, I work within repair products to ensure Home Depot associates are
          able to quickly and efficiently work on repairs. My team maintains three main work
          streams: Repair Depot, Repair Tracker, and Repair Queues. I have produced, tested, and
          validated designs for each product and have had a hand in assisting the UX team at large
          through collaborations and design pairing. Unfortunately, the designs I‘ve created are
          unable to be shared due to an NDA. However, I have done my best to outline the process and
          add or reproduce visuals as needed.
        </p>
        <h2 className="sectionName">The Process</h2>
        <div className="imgCol">
          <img alt="" src={persona} />
        </div>
        <p>
          As a result of having three main areas of focus within my product experience group that
          revolved around repair, it was necessary for me to understand our main user: a Home Depot
          tool technician. With this persona, I was able to better gauge pain points, areas of
          improvement, and how the work I was doing was having an impact on people‘s daily lives.
          This also gave me the opportunity to design better experiences within our products.
        </p>
      </div>
      <div className="col4">
        <h4>Repair Tracker</h4>
      </div>
      <div className="col1">
        <h4>2000</h4>
        <h5>Weekly Users</h5>
      </div>
      <div className="col1">
        <h4>2700</h4>
        <h5>Weekly Sessions</h5>
      </div>
      <div className="col1">
        <h4>0.93%</h4>
        <h5>Bounce Rate</h5>
      </div>
      <div className="col1">
        <h4>1:47</h4>
        <h5>Avg. Session Duration</h5>
      </div>
      <div className="col4">
        <p>
          An issue in which numerous associates had within Home Depot stores was locating repairs.
          This is due to certain stores lacking a Tool Rental Center, and therefore, some tools need
          to be shipped out for repair. In order to track the location and status of the repair,
          associates used to have to contact multiple parties to figure out where the tool is. This
          caused issues when customers had dropped off tools and returned to the store after a
          period of time to figure out the status of their repair. Through multiple research
          sessions, it was found that when customers asked about the status, the associates couldn’t
          get a response until up to 48 hours later.
        </p>
      </div>
      <div className="col4">
        <span className="work-intro-quote" />
        <h4>
          Glad to finally have a way to track what‘s happening with repairs. This is fantastic.
        </h4>
        <p>- Tool Rental Center Associate</p>
      </div>
      <div className="col4">
        <p>
          Repair Tracker thus had the objective of being able to easily find the status of a given
          repair by looking up the tag number within a web app. This would allow associates to
          search a tag and see notes, updates, and have the ability to contact necessary parties
          without having to wait for multiple days to receive an answer. I held responsibility in
          designing Repair Tracker and conducting a total of 8 usability tests, including three in a
          Home Depot UX Testing lab. I also held numerous user research sessions to ensure pain
          points were confirmed as well as to ensure all necessary stakeholders were included. Since
          my assistance, the Repair Tracker application has been launched to all of Home Depot‘s
          2000+ stores.
        </p>
      </div>
      <div className="col4">
        <h4>Repair Depot</h4>
      </div>
      <div className="col1">
        <h4>55</h4>
        <h5>Live Stores</h5>
      </div>
      <div className="col1">
        <h4>257</h4>
        <h5>Weekly Sessions</h5>
      </div>
      <div className="col1">
        <h4>21.79%</h4>
        <h5>Bounce Rate</h5>
      </div>
      <div className="col1">
        <h4>7:37</h4>
        <h5>Avg. Session Duration</h5>
      </div>
      <div className="col4">
        <p>
          The current method of maintaining repairs for Home Depot is cumbersome, unintuitive, and
          requires a multitude of systems. The main goal of Repair Depot is to replace these systems
          with a singular app that is able to accomplish the management of repairs and ordering
          parts. Since joining the team, I have led efforts to add the functionality of maintaining
          inventory, ordering parts, and viewing order history. Repair Depot has been launched to 55
          stores with this functionality. It will be launched to hundreds more during the first half
          of 2019 with the additional functionality of managing, creating, and working on repairs.
        </p>
        <div className="imgcol">
          <img alt="" src={fleetjourney} />
        </div>
        <p>
          When I first joined the Repair team, Repair Depot was only in one store with limited
          functionality. I began the undertaking of developing research, conducting interviews, and
          designing a prototype to ensure that the future state of the application was clear. The
          first goal of Repair Depot was to replace the current legacy repair system for repairing
          fleet tools. These are tools that Home Depot rents out. These tools will some times come
          back broken or otherwise damaged, and will then need to be repaired. The existing system
          to track these repairs is unintuitive with an extremely unfriendly interface.
        </p>
        <p>
          I first worked on areas of research and developed a research script. After peer reviews, I
          visited numerous stores to understand user pain points and technicians‘ goals for a new
          system. I was then able to present my findings to stakeholders to gain alignment across
          our partners and balanced team. Following from this, I led a design studio to ideate how
          features would look and how screens would interact with each other. With this, I was
          successfully able to translate a paper prototype to a fully functioning Sketch prototype.
          I then led a design critique to solicit feedback from my teammates on the Enterprise UX
          team. During this time, I also conducted 8 usability tests with technicians in Home Depot
          stores. All of this allowed personal growth for me as a designer, as it gave me the
          opportunity to collaborate with my peers and learn from others.
        </p>
        <p>
          Currently, I am following a discovery and framing pattern to understand the problems of
          managing customer repairs today. With a kickoff meeting completed, I have been able to
          work on developing a customer journey and research topics so that Repair Depot can
          eventually encompass all forms of repairs.
        </p>
        <h2 className="sectionName">The Reflection</h2>
        <p>
          Thus far, Home Depot has been a great place to work and I have been looking forward to
          what more I can learn from my experience here. The Enterprise UX team at large has given
          me the opportunity to consistently learn from others, as well as hone in my communication
          and collaboration skills. Finally, working within a balanced team has given me new
          insights into the agile methodology and employed skills I have learned from college in a
          real-world setting.
        </p>
        <p>
          Grow your personal brand. Within an Enterprise environment, it has been important for me
          to grow my professional skills in addition to my skills as a designer. This means I have
          had to grow into my own space within the UX team and grow my own personal brand and
          perception among my peers.
        </p>
      </div>
    </div>
  </Layout>
);

export default HomeDepot;
