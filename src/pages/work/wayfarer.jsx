import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import wayfarer from '../../images/wayfarerthumbnail.png';
import wayfarerflow from '../../images/wayfarerflow.png';
import wayfarerwireframe from '../../images/wayfarerwireframe.png';

const Wayfarer = () => (
  <Layout>
    <SEO title="Wayfarer" />
    <div className="wrapper headerSection">
      <div className="col4">
        <h1>Wayfarer Mockup</h1>
      </div>
      <div className="col2">
        <h3 className="lead-in">
          Designed a mockup for an app with a gamified hiking experience that utilizes audio cues.
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
          <img alt="" src={wayfarer} />
        </div>
      </div>
    </div>
    <div className="wrapper contentSection ">
      <div className="col4 workContent">
        <h2 className="sectionName">The Problem</h2>
        <p>
          Hiking may become uninteresting to those that hike the same trails or are lacking
          motivation. This, in turn, results in less interest in hiking and the outdoors.
        </p>
        <h2 className="sectionName">The Product</h2>
        <p>
          Within a group of four, I helped to envision an app that revolves around finding and
          &#34;collecting&#34; points of interests while hiking. In particular, I was responsible
          for creating the visual interface and testing the usability of the app.
        </p>
        <h2 className="sectionName">The Process</h2>
        <p>
          To begin with, a team member and I had an idea for creating a gamified hiking app. With
          our mutual interests in the outdoors, it seemed like an obvious fit. After doing some
          market research, we found many apps that revolved around providing information to hikers,
          such as water sources and campsites. However, none had a focus or reward for finding
          interesting points along trails. After this initial market research, our team divided up
          to work on different aspects; two team members were in charge of generating unique sounds
          that would play when a user found a point of interest based on type, another group member
          created a Unity simulation to test our sounds, and I was responsible for designing the
          visual piece of the app.
        </p>
        <div className="bodyImgCol">
          <img alt="" src={wayfarerflow} />
        </div>
        <p>
          I initially began with a flow of how the user would interact with the app, from account
          creation to finding and submitting points of interest. From here, I had a good foundation
          to create wireframes. With these wireframes, I was able to get feedback from my teammates
          and prospective users and then transition into a high fidelity prototype to carry out
          testing.
        </p>
        <div className="bodyImgCol">
          <img alt="" src={wayfarerwireframe} />
        </div>
        <p>
          We then regrouped to carry out six usability tests that included the visual and auditory
          elements of the app. These tests allowed our team to understand a few misleading aspects.
          To test our auditory cues, we played the sounds for participants and had them guess what
          the sound could signify. These sounds included finding an overlook, a water source, a
          campsite, and many others. Ultimately, we made a few adjustments to the sound and felt
          that having a tutorial would be a valuable addition so that new users could quickly
          understand the various sounds. With these tests completed, our team was able to organize a
          final visual design and set of auditory cues to report our work.
        </p>
        <h2 className="sectionName">The Reflection</h2>
        <p>
          Working with an auditory-based interface was unique and offered one key insight for me:
        </p>
        <p>
          (1) Be detail oriented. Auditory elements of applications are often disregarded in favor
          of visuals or other systems. Small details like having auditory cues can be extremely
          valuable for communicating information and ensuring that your app is usable. Reduced
          errors also result in an ultimately satisfied user.
        </p>
      </div>
    </div>
  </Layout>
);

export default Wayfarer;
