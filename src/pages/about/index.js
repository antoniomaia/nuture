import React from 'react';

import Hero from '../../components/hero';
import secondary_page_styles from '../styles.module.scss';
import styles from './styles.module.scss';

const About = () => {
  return (
    <section className={secondary_page_styles.simple_page_container}>
      <Hero.Secondary headline={'About us'} />
      <div className={secondary_page_styles.body}>
        <p>
          Ecological Earth was founded in 2020 and built on the vision that
          Sustainable Development should be a common tool for every user in
          every organization. With a team working for more than 5 years in
          Environment and Business Intelligence, we have created a solution that
          enables corporations/users to use a inovative footprint calculator in
          their everyday analysis and decision-making processes.
          Ecological.Earth is a small team of humans concerned by our impact on
          the planet. We put our minds thinking about climate change and our
          mission is to build tools that help everyone understand and reduce
          their carbon footprint and fight the climate crisis.
        </p>
        <p>
          We’re starting with a web app that makes it easy to calculate our
          carbon footprint. It’s a simple calculator that gives us a rough
          estimate of our carbon footprint based on our habits.
        </p>
        <p>
          Try it out and let us know what you think. Give us feedback. We’re
          here for you. Help us improve and if you have any question, idea or
          kind words please drop us a message at email and we will get back as
          soon as we can!
        </p>
        <br />
        <br />
        <div className={styles.team}>
          <h2>The team</h2>
          <p>Located in 🇵🇹.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
