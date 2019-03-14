import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import customerjourney from '../../images/customerjourney.png';
import fleetjourney from '../../images/fleetjourney.png';
import persona from '../../images/persona.png';

const HomeDepot = () => (
  <Layout>
    <SEO title="Home Depot" />
    <h1>Home Depot - UX Designer</h1>
    <p>Working as a UX designer at The Home Depot</p>
    <h3>The Product</h3>
    <p>
      Since the summer of 2018, I have been working as a UX Designer for The
      Home Depot. Within the Enterprise UX team, I work within repair products
      to ensure Home Depot associates are able to quickly and efficiently work
      on repairs. My team maintains three main work streams: Repair Depot,
      Repair Tracker, and Repair Queues. I have produced, tested, and validated
      designs for each product and have had a hand in assisting the UX team at
      large through collaborations and design pairing. Unfortunately, the
      designs I've created are unable to be shared due to an NDA. However, I
      have done my best to outline the process and add or reproduce visuals as
      needed.
    </p>
    <h3>The Process</h3>
    <img alt="" src={persona} />
    <p>
      As a result of having three main areas of focus within my product
      experience group that revolved around repair, it was necessary for me to
      understand our main user: a Home Depot tool technician. With this persona,
      I was able to better gauge pain points, areas of improvement, and how the
      work I was doing was having an impact on people's daily lives. This also
      gave me the opportunity to design better experiences within our products.
    </p>
    <h4>Repair Tracker</h4>
    <p>
      An issue in which numerous associates had within Home Depot stores was
      locating repairs. This is due to certain stores lacking a Tool Rental
      Center, and therefore, some tools need to be shipped out for repair. In
      order to track the location and status of the repair, associates used to
      have to contact multiple parties to figure out where the tool is. This
      caused issues when customers had dropped off tools and returned to the
      store after a period of time to figure out the status of their repair.
      Through multiple research sessions, it was found that when customers asked
      about the status, the associates couldn’t get a response until up to 48
      hours later.
    </p>
    <h4>
      Glad to finally have a way to track what's happening with repairs. This is
      fantastic.
    </h4>
    <p>- Tool Rental Center Associate</p>
    <p>
      Repair Tracker thus had the objective of being able to easily find the
      status of a given repair by looking up the tag number within a web app.
      This would allow associates to search a tag and see notes, updates, and
      have the ability to contact necessary parties without having to wait for
      multiple days to receive an answer. I held responsibility in designing
      Repair Tracker and conducting a total of 8 usability tests, including
      three in a Home Depot UX Testing lab. I also held numerous user research
      sessions to ensure pain points were confirmed as well as to ensure all
      necessary stakeholders were included. Since my assistance, the Repair
      Tracker application has been launched to all of Home Depot's 2000+ stores.
    </p>
    <h4>Repair Depot</h4>
    <p>
      The current method of maintaining repairs for Home Depot is cumbersome,
      unintuitive, and requires a multitude of systems. The main goal of Repair
      Depot is to replace these systems with a singular app that is able to
      accomplish the management of repairs and ordering parts. Since joining the
      team, I have led efforts to add the functionality of maintaining
      inventory, ordering parts, and viewing order history. Repair Depot has
      been launched to 55 stores with this functionality. It will be launched to
      hundreds more during the first half of 2019 with the additional
      functionality of managing, creating, and working on repairs.
    </p>
    <img alt="" src={fleetjourney} />
    <p>
      When I first joined the Repair team, Repair Depot was only in one store
      with limited functionality. I began the undertaking of developing
      research, conducting interviews, and designing a prototype to ensure that
      the future state of the application was clear. The first goal of Repair
      Depot was to replace the current legacy repair system for repairing fleet
      tools. These are tools that Home Depot rents out. These tools will some
      times come back broken or otherwise damaged, and will then need to be
      repaired. The existing system to track these repairs is unintuitive with
      an extremely unfriendly interface. I first set out to research this area
      and incorporate managing fleet repairs within Repair Depot. To accomplish
      this, I worked out the user journey of a technician working on a fleet
      tool to grow empathy.
    </p>
    <img alt="" src={customerjourney} />
    <p>
      Following from this, I worked on areas of research and developed a
      research script. After peer reviews, I visited numerous stores to
      understand user pain points and technicians' goals for a new system. I was
      then able to present my findings to stakeholders to gain alignment across
      our partners and balanced team. Following from this, I led a design studio
      to ideate how features would look and how screens would interact with each
      other. With this, I was successfully able to translate a paper prototype
      to a fully functioning Sketch prototype. I then led a design critique to
      solicit feedback from my teammates on the Enterprise UX team. During this
      time, I also conducted 8 usability tests with technicians in Home Depot
      stores. All of this allowed personal growth for me as a designer, as it
      gave me the opportunity to collaborate with my peers and learn from
      others.
    </p>
    <p>
      Currently, I am following a discovery and framing pattern to understand
      the problems of managing customer repairs today. With a kickoff meeting
      completed, I have been able to work on developing a customer journey and
      research topics so that Repair Depot can eventually encompass all forms of
      repairs.
    </p>
    <h4>The Reflection</h4>
    <p>
      Thus far, Home Depot has been a great place to work and I have been
      looking forward to what more I can learn from my experience here. The
      Enterprise UX team at large has given me the opportunity to consistently
      learn from others, as well as hone in my communication and collaboration
      skills. Finally, working within a balanced team has given me new insights
      into the agile methodology and employed skills I have learned from college
      in a real-world setting.
    </p>
    <p>
      Grow your personal brand. Within an Enterprise environment, it has been
      important for me to grow my professional skills in addition to my skills
      as a designer. This means I have had to grow into my own space within the
      UX team and grow my own personal brand and perception among my peers.
    </p>
  </Layout>
);

export default HomeDepot;
