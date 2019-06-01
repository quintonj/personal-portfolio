import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import atlantastreetart from '../../images/atlantastreetart.png';
import asapideas from '../../images/asapideas.png';
import tasktable from '../../images/asaptasktable.png';
import asapui from '../../images/asapui.png';

const AtlantaStreetArt = () => (
  <Layout>
    <SEO title="Atlanta Street Art" />
    <div className="wrapper">
      <div className="col4">
        <h1>Atlanta Street Art Project</h1>
      </div>
      <div className="col2">
        <h3 className="lead-in">
          An Android app that allows users to explore street art throughout Atlanta.
        </h3>
      </div>
      <div className="col1">
        <h4>Role</h4>
        <h5>UX Designer & Developer</h5>
      </div>
      <div className="col1">
        <h4>Category</h4>
        <h5>UI / UX, Android Development</h5>
      </div>
      <div className="col4">
        <div className="imgCol">
          <img alt="" src={atlantastreetart} />
        </div>
      </div>
      <div className="col4 workContent">
        <h2 className="sectionName">The Problem</h2>
        <p>
          There is a vast amount of street art throughout Atlanta, but there is no centralized way
          to figure out where these pieces of art are or who made them.
        </p>
        <h2 className="sectionName">The Product</h2>
        <p>
          The Atlanta Street Art Project displays images and locations of street art throughout
          Atlanta. Within a group of five, I had a significant role in the development and design of
          the app. It began as a yearlong capstone project and was continued as a side project so
          that I could see it through to completion.
        </p>
        <h2 className="sectionName">The Process</h2>
        <p>
          The project began with user research along with sketching out potential design ideas. Our
          team first developed personas and identified user stories. We felt that our users would
          mostly be residents inside the perimeter of Atlanta who are in their early twenties. With
          personas and stories in mind, we began producing ideas for the user interface. We began by
          drawing up some ideas on a whiteboard together. From here, we were able to get a consensus
          on the features our team would like to prioritize, how these features would interact, and
          how they should look. We thus were able to put together a lo-fidelity pen and paper
          prototype.
        </p>
        <p>
          After the lo-fidelity prototype was created, we conducted five usability tests to ensure
          that our designs were on the right path. This involved giving users five tasks to complete
          with the prototype and understanding what their thoughts were, including creating an
          account, creating a tour of art, finding art around you, and submitting art. During these
          tests we tracked completion rate and time, as well as errors they made and feedback on the
          general process.
        </p>
        <div className="imgCol">
          <img alt="" src={tasktable} />
        </div>
        <p>
          From these tests, we were able to identify some issues with the design, such as the layout
          and process of logging in as well as the usability of the neighborhood screen. With the
          issues in mind, I individually converted our lo-fidelity prototype into an interactive
          hi-fidelity prototype with Sketch and InVision.
        </p>
        <div className="imgCol">
          <img alt="" src={asapui} />
        </div>
        <p>
          Once we had a full design, we started the implementation process. I have since also
          designed a logo for the app and have had it published to the
          <a href="https://play.google.com/store/apps/details?id=comquintonj.github.atlantastreetartproject&hl=en">
            {' '}
            Google Play Store
          </a>
          .
        </p>
        <h2 className="sectionName">The Reflection</h2>
        <p>
          Due to the app being a capstone project, our team worked with a real-world client. As the
          client-liaison of the group, I was in charge of ensuring that they were happy with what
          our team was producing. In addition to this, the completion of a full Android app within a
          group provided many new experiences for me. A couple of key takeaways from the project
          were:
        </p>
        <p>
          (1) Keep the client happy. As the originator of the idea for the project, it was important
          for our group to ensure that the client was satisfied with the progress our team was
          making. This meant we had to hold biweekly meetings to show our user stories, design
          ideas, and our final implementation.
        </p>
        <p>
          (2) Seek help early and often. While our whole team did learn a lot throughout the
          creation of the app, we definitely encountered obstacles along the way. If a team member
          was having issues, it was important for them to bring the problem to the group so that
          other members could help.
        </p>
      </div>
    </div>
  </Layout>
);

export default AtlantaStreetArt;
