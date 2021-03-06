/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import me from '../images/me.jpg';

// One portfolio item styling
const AboutSection = styled.div`
  @media screen and (max-width: 1000px) {
    margin-top: 20px;
  }
`;

// One portfolio item styling
const SkillsSection = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

/**
 * About me page
 */
const About = () => (
  <Layout>
    <SEO title="About" />

    <div className="wrapper headerSection">
      <div className="col4">
        <h2 className="sectionHeader">About Me</h2>
      </div>
      <div className="col2">
        <img alt="" src={me} />
      </div>
      <div className="col2">
        <AboutSection>
          <p>
            Born and raised in Atlanta, I attended the Georgia Institute of Technology where I
            graduated in 2018 with a B.S. in Computer Science and a minor in Industrial Design. I am
            currently working at <a href="https://www.roadie.com">Roadie</a> as a User Experience
            Designer. My distinctive background has given me the opportunity to work both my left
            and right brain. As a designer, it is my goal to create compelling, unique, and
            thoughtful experiences that are feasible.
          </p>
          <p>
            Through my upbringing, I always found that I had an interest in design. Whether it was
            how my MySpace page CSS worked or designing posters for my high school clubs, I knew
            that I had an eye for visual design. Fast forward to college-time, I knew that computer
            science would provide a balanced background for me and allow me to explore multiple
            avenues. Today, this background has allowed me to collaborate with my peers effectively
            to ensure the best product possible.
          </p>
          <p>
            My passions include UI and UX design, as well as software development. In my free time,
            I love to do
            <a href="https://www.strava.com/athletes/10263084"> triathlons</a>, watch
            <a href="https://letterboxd.com/quintonj/"> movies</a>, listen to
            <a href="https://www.last.fm/user/quintonbjohnson"> music</a>, and{' '}
            <a href="https://www.instagram.com/quintonbjohnson/">hike</a> with my border collie,
            Fitz. Within this site, you can find my skill set and projects that have made me proud.
          </p>
        </AboutSection>
      </div>
    </div>
    <SkillsSection>
      <div className="wrapper headerSection">
        <div className="col4">
          <h2 className="sectionHeader">Skills</h2>
        </div>

        <div className="col2">
          <h3>UI / UX</h3>
          <p>
            Prototyping, Usability Testing, Interviewing, Observing, Storyboarding, Developing
            Personas, Journey Mapping
          </p>
        </div>
        <div className="col2">
          <h3>Software</h3>
          <p>
            Sketch, Figma, InVision, Photoshop, Illustrator, InDesign, Android Studio, Unity, Axure,
            Git, Google Analytics
          </p>
        </div>
        <div className="col2">
          <h3>Development</h3>
          <p>HTML, CSS, JavaScript, React.js, Java, Python, C, C#</p>
        </div>
      </div>
    </SkillsSection>
  </Layout>
);

export default About;
