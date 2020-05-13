/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import foodfightfull from '../../images/foodfightfull.png';
import foodfightcontroller from '../../images/foodfightcontroller.png';
import foodfightthumb from '../../images/foodfightthumb.jpg';
import foodfightvideo from '../../images/foodfightvideo.mp4';

const FoodFight = () => (
  <Layout>
    <SEO title="Food Fight" />
    <div className="wrapper">
      <div className="col4">
        <h1>Food Fight</h1>
      </div>
      <div className="col2">
        <h3 className="lead-in">A 2D action game made with Processing and Arduino.</h3>
      </div>
      <div className="col1">
        <h5>Role</h5>
        <h4>Game Designer and Developer</h4>
      </div>
      <div className="col1">
        <h5>Category</h5>
        <h4>Game Design, UI, Development</h4>
      </div>
      <div className="col4">
        <div className="headerImgCol">
          <video poster={foodfightthumb} controls="true" source src={foodfightvideo}>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="col4 workContent">
        <h2 className="sectionName">The Problem</h2>
        <p>
          How might we create a game that uses a unique controller and provide for an entertaining
          experience?
        </p>
        <h2 className="sectionName">The Product</h2>
        <p>
          Food Fight is a 2D multiplayer game that was developed with Processing and utilizes two
          “food trays” made up of capacitors and two Arduinos. Within a group of four, I handled all
          of the game’s programming, gave design input, and assisted with soldering and building the
          boards. To play the game, a player pulls back a spoon to fling food at the other player.
          There are options to switch to Jello, meatballs, peas, and mashed potatoes, each with
          their own unique attributes. This is done via capacitors connected to an Arduino
          breadboard that allow the user to tap their spoon to the tray to switch food. There is
          also a tilt sensor on the board that allows the user to flip up the tray to block incoming
          food. The first player to get the other’s health points down to 0 wins!
        </p>
        <div className="bodyImgCol">
          <img alt="" src={foodfightfull} />
        </div>
        <h2 className="sectionName">The Process</h2>
        <p>
          The game design process began with the objective to create a game using a unique
          controller similar to Steel Battalion or Dance Dance Revolution. Our team thus set off to
          brainstorm a few different ideas. The initial idea came from the desire to have a
          two-player fighting game that revolved around a basic food fight. With the game foundation
          in mind, we set out to build the initial functionality to provide a proof-of-concept. This
          involved using a spoon with a capacitor to control an arrow on the screen. Following from
          this, I was able to implement the ability to shoot an object after releasing the spoon. I
          also began developing more features, such as controlling the physics of the different food
          items, including the backgrounds, and creating the environment. Meanwhile, our group
          created the trays and art assets for the game.
        </p>
        <div className="bodyImgCol">
          <img alt="" src={foodfightcontroller} />
        </div>
        <p>
          With additional feedback from another round of playtesting I conducted, I was able to
          fine-tune the shooting mechanics to ensure that the game was not too easy or too hard. I
          also tweaked the physics of each item and the threshold for flinging food and how much
          pressure was placed on the spoon. We were also successful in creating a second food tray
          and spoon. Thus, I was able to implement the last piece of the puzzle by controlling the
          two controller inputs at once. The final result was a bizarre, yet hilarious game.
        </p>
        <h2 className="sectionName">The Reflection</h2>
        <p>
          Having come from a design and development background, I was completely out of my element
          when it came to soldering and working with microcontrollers. Despite this, I was
          successful in my collaboration with the team and my assistance with the project. This led
          me to one main conclusion:
        </p>
        <p>
          (1) Don’t be afraid to learn new things. This project gave me a chance to improve and work
          on a variety of new skill-sets including physical prototyping, working with Processing,
          and soldering. As a result, I was able to learn a lot of new things and came away much
          more knowledgeable and confident in my abilities.
        </p>
      </div>
    </div>
  </Layout>
);

export default FoodFight;
