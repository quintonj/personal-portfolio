import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import atlantastreetart from '../../images/atlantastreetart.png';

const AtlantaStreetArt = () => (
  <Layout>
    <SEO title="Atlanta Street Art" />
    <div className="wrapper">
      <div className="col4">
        <h1>Atlanta Street Art Project</h1>
      </div>
      <div className="col2">
        <h3 className="lead-in">
          An Android app that allows users to explore street art throughout
          Atlanta.
        </h3>
      </div>
      <div className="col1">
        <h4>Role</h4>
        <h5>UX Designer & Moble Developer</h5>
      </div>
      <div className="col1">
        <h4>Category</h4>
        <h5>UI / UX, Mobile Development</h5>
      </div>
      <div className="col4">
        <h3>The Product</h3>
        <p>
          The Atlanta Street Art Project displays images and locations of street
          art throughout Atlanta. Within a group of five, I had a significant
          role in the development and design of the app. It began as a yearlong
          capstone project and was continued as a side project so that I could
          see it through to completion.
        </p>
        <h3 className="sectionName">The Process</h3>
        <p>
          The project began with user research along with sketching out
          potential design ideas. After lo-fidelity mockups were created, we
          conducted usability tests to ensure that our designs were on the right
          path. After this, I took the critiques from the tests and developed a
          hi-fidelity prototype with Sketch and InVision. Once we had a full
          design, we started the implementation process. I have since also
          designed a logo for the app and have had it published to the{' '}
          <a href="https://play.google.com/store/apps/details?id=comquintonj.github.atlantastreetartproject&hl=en">
            Google Play Store.
          </a>{' '}
          For a more detailed overview of the design process, be sure to read
          more on{' '}
          <a href="https://www.behance.net/gallery/57295767/Atlanta-Street-Art-Project">
            Behance
          </a>
          .
        </p>
        <h3 className="sectionName">The Reflection</h3>
        <p>
          Due to the app being a capstone project, our team worked with a
          real-world client. As the client-liaison of the group, I was in charge
          of ensuring that they were happy with what our team was producing. In
          addition to this, the completion of a full Android app within a group
          provided many new experiences for me. A couple of key takeaways from
          the project were:
        </p>
        <p>
          Keep the client happy. As the originator of the idea for the project,
          it was important for our group to ensure that the client was satisfied
          with the progress our team was making. This meant we had to hold
          biweekly meetings to show our user stories, design ideas, and our
          final implementation.
        </p>
        <p>
          Seek help early and often. While our whole team did learn a lot
          throughout the creation of the app, we definitely encountered
          obstacles along the way. If a team member was having issues, it was
          important for them to bring the problem to the group so that other
          members could help.
        </p>
      </div>
    </div>
  </Layout>
);

export default AtlantaStreetArt;
