import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import homedepot from '../../images/homedepotthumbnail.png';
import fleetjourney from '../../images/fleetjourney.png';
import persona from '../../images/persona.png';
import repairtracker from '../../images/repairtracker.png';
import repairs from '../../images/repairs.png';
import repairdetails from '../../images/repairdetails.png';

const HomeDepot = () => (
  <Layout>
    <SEO title="Home Depot" />
    <div className="wrapper headerSection">
      <div className="col4">
        <h1>UX Designer - The Home Depot</h1>
      </div>
      <div className="col2">
        <h3 className="lead-in">
          Handled the design of several apps for the Repairs team at The Home Depot.
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
          <img alt="" src={homedepot} />
        </div>
      </div>
    </div>
    <div className="wrapper contentSection ">
      <div className="col4 workContent">
        <h2 className="sectionName">The Problem</h2>
        <p>
          At the time of joining The Home Depot, the associate facing systems were incapable of
          adapting to the comprehensive vision for repair. Technicians managed repairs through
          multiple systems, while customers faced long wait times, limited visibility, and unclear
          expectations during the repair process.
        </p>
        <h2 className="sectionName">The Product</h2>
        <p>
          Starting in the summer of 2018, I worked as a UX Designer for The Home Depot. Within the
          Enterprise UX team, I worked on repair products to ensure Home Depot associates are able
          to quickly and efficiently work on repairs. My team maintained three main work streams:
          Repair Depot, Repair Tracker, and Repair Queues. I produced, tested, and validated designs
          for each product and had a hand in assisting the UX team at large through collaborations
          and design pairing. Unfortunately, the designs I‘ve created are unable to be shared due to
          an NDA. However, I have done my best to outline the process and add or reproduce visuals
          as needed.
        </p>
        <h2 className="sectionName">The Process</h2>
        <div className="bodyImgCol">
          <img alt="" src={persona} />
        </div>
        <p>
          As a result of having three main areas of focus within my product experience group that
          revolved around repair, it was necessary for me to understand our main user: a Home Depot
          tool technician. With this persona, I was able to better gauge pain points, areas of
          improvement, and how the work I was doing was having an impact on people‘s daily lives.
          This also gave me the opportunity to design better experiences within our products.
        </p>
        <h4 className="subSectionName">Repair Tracker</h4>
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
        <div className="bodyImgCol">
          <img alt="" src={repairtracker} />
        </div>
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
        <h4 className="subSectionName">Repair Depot</h4>
        <p>
          The current method of maintaining repairs for Home Depot is cumbersome, unintuitive, and
          requires a multitude of systems. The main goal of Repair Depot is to replace these systems
          with a singular app that is able to accomplish the management of repairs and ordering
          parts. Since joining the team, I led efforts to add the functionality of maintaining
          inventory, ordering parts, and viewing order history. Repair Depot has been launched to
          all stores with this functionality, with additional features being added in biweekly
          sprints to address associate feedback.
        </p>
        <div className="bodyImgCol">
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
          stores.
        </p>
        <div className="bodyImgCol">
          <img alt="" src={repairs} />
        </div>
        <div className="bodyImgCol">
          <img alt="" src={repairdetails} />
        </div>
        <h2 className="sectionName">The Reflection</h2>
        <p>
          At Home Depot, the Enterprise UX team at large gave me the opportunity to consistently
          learn from others, as well as hone in my communication and collaboration skills. In
          addition, working within a balanced team gave me new insights into the agile methodology
          and employed skills I have learned from college in a real-world setting.
        </p>
        <p>
          (1) Grow your personal brand. Within an Enterprise environment, it was important for me to
          grow my professional skills in addition to my skills as a designer. This means I had to
          grow into my own space within the UX team and grow my own personal brand and perception
          among my peers.
        </p>
      </div>
    </div>
  </Layout>
);

export default HomeDepot;
