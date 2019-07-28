import React from "react";

import NavBar from "../navigation/Navbar";
import helloMelon from "../../assets/images/helloMelon_home.png";
import { HelloMelonWrapper, Section, Features, Techs, Tech } from "../../styles/helloMelonStyles";

const HelloLemon = () => {
  return (
    <HelloMelonWrapper>
      <NavBar />
      <h1>Welcome to Hello Melon</h1>
      <h2>Take control of your health</h2>
      <img src={helloMelon} alt='Hello Melon - Home' />
      <Section>
        <h2>Overview</h2>
        <p>
          A nutrition tracking application that provides a visualization of eating patterns and nutritional data to
          empower people to take control of their health.
        </p>
      </Section>
      <Features>
        <h2>Features</h2>
        <p>
          <ul>
            <li>
              <h3>Keep track of daily food intake and exercises (workouts)</h3>
              <p>
                Save your food choices using the search of an integrated food database (connected to a food database
                API) or create your own entry. You can even choose foods from popular brands and restaurants. Enter also
                your daily workout.
              </p>
            </li>
            <li>
              <h3>Access custom reports</h3>
              <p>
                See your progress with our customer reports. Whether your goal is to keep track of your nutrients or
                just a calory count, we have it all for you. You can also download a pdf report to share.
              </p>
            </li>
            <li>
              <h3>Get a coach to follow you</h3>
              <p>
                Whether you want a friend or your personal trainer to see your progress or keep you accountable, our
                coach feature allows you to communicate your progress easily.
              </p>
            </li>
          </ul>
        </p>
      </Features>
      <Section>
        <h2>Technologies used</h2>
        <Techs>
          <Tech>React</Tech>
          <Tech>Graphql</Tech>
          <Tech>sqlite3</Tech>
          <Tech>strip</Tech>
          <Tech>MaterialUI</Tech>
          <Tech>Styled Components</Tech>
        </Techs>
      </Section>
    </HelloMelonWrapper>
  );
};

export default HelloLemon;
