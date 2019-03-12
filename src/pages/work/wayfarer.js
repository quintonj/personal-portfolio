import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import wayfarerfull from '../../images/wayfarer.png';

const Wayfarer = () => (
  <Layout>
    <SEO title="Wayfarer" />
    <h1>Wayfarer App Mockup</h1>
    <p>
      A mockup for an app that creates a gamified hiking experience utilizing
      auditory cues.
    </p>
    <img alt="" src={wayfarerfull} />
    <h3>The Product</h3>
    <p>
      The goal of the project was simple: design a system that relies on
      auditory feedback to relay information to the user. Within a group of
      four, I helped to envision an app that revolves around finding and
      "collecting" points of interests while hiking. In particular, I was
      responsible for creating the visual interface and testing the usability of
      the app.
    </p>
    <h3>The Process</h3>
    <p>
      To begin with, a team member and I had an idea for creating a gamified
      hiking app. With our mutual interests in the outdoors, it seemed like an
      obvious fit. After doing some market research, we found many apps that
      revolved around providing information to hikers, such as water sources and
      campsites. However, none had a focus or reward for finding interesting
      points along trails. After this initial market research, our team divided
      up to work on different aspects; two team members were in charge of
      generating unique sounds that would play when a user found a point of
      interest based on type, another group member created a Unity simulation to
      test our sounds, and I was responsible for designing the visual piece of
      the app.
    </p>
    <p>
      We then regrouped to carry out six usability tests that included the
      visual and auditory elements of the app. These tests allowed our team to
      understand a few misleading aspects. A few participants were confused by
      the "Activity" screen and felt as though previous activities would be
      shown there. As a result, the name for this screen was changed to "Start
      Trail". To test our auditory cues, we played the sounds for participants
      and had them guess what the sound could signify. These sounds included
      finding an overlook, a water source, a campsite, and many others.
      Ultimately, we made a few adjustments to the sound and felt that having a
      tutorial would be a valuable addition so that new users could quickly
      understand the various sounds. With these tests completed, our team was
      able to organize a final visual design and set of auditory cues to report
      our work. For an interactive prototype, please see the{' '}
      <a href="https://invis.io/SNEGR0N86">InVision Prototype</a> I created.
    </p>
    <h3>The Reflection</h3>
    <p>
      Working with an auditory-based interface was unique and offered one key
      insight for me:
    </p>
    <p>
      Be detail oriented. Auditory elements of applications are often
      disregarded in favor of visuals or other systems. Small details like
      having auditory cues can be extremely valuable for communicating
      information and ensuring that your app is usable. Reduced errors also
      result in an ultimately satisfied user.
    </p>
  </Layout>
);

export default Wayfarer;
