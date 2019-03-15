import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import star from '../../images/starthumbnail.png';

const STAR = () => (
  <Layout>
    <SEO title="STAR" />
    <div className="wrapper">
      <div className="col4">
        <h1>STAR</h1>
      </div>
      <div className="col2">
        <h3 className="lead-in">
          An Android app that allows users who are deaf or hard of hearing to communicate with
          others quickly through the use of speech-to-text.
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
        <img alt="" src={star} />
        <h3>The Product</h3>
        <p>
          STAR allows users who are deaf or hard of hearing to utilize speech-to-text and
          text-to-speech in order to hold conversations with others. It is meant as a bridge for
          communication between the users and those who do not know American Sign Language. The app
          acts as a standard messaging app, where users can type what they would like to say into
          the text field. The person they are talking to can then use the microphone to respond to
          the user. The app also uses location as a tool for context awareness. The presets at the
          bottom of the interface are dynamic depending on the user‘s surrounding area. Finally,
          users can have multiple conversations available to them and their message history is
          persistent. Thus, if they are in the same location again, they can pull up their old
          messages so that they do not have to repeat the process.
        </p>
        <h3 className="sectionName">The Process</h3>
        <p>
          At the beginning of the project, our team met with a Georgia Tech Research Scientist to
          understand the needs of the project. We discovered that a prior version of the app lacked
          intuitive usability and had a codebase that was difficult to refactor. Therefore, we
          decided to implement the project and rectify the errors of the first implementation. We
          began by ideating use cases. Following from this, I created and edited a brief video demo
          to demonstrate our progress and design ideas. We then received feedback and began
          implementing the app. Throughout the process of implementation, our team consistently
          received feedback from peers and our mentor to ensure that we were meeting the proper
          requirements for the app.
        </p>
        <h3 className="sectionName">The Reflection</h3>
        <p>
          While working on the project, there were many opportunities to receive constructive
          criticism and feedback about the app. Ultimately, this led to a better user experience and
          gave our team concrete items to improve. This left me with one major insight:
        </p>
        <p>
          Be open to criticism of your work. By showing the video demos and talking about the app to
          our mentor and peers, our team was able to learn about what we were doing wrong. We
          realized that these were not personal attacks, but ways for us to create an overall better
          product.
        </p>
      </div>
    </div>
  </Layout>
);

export default STAR;
