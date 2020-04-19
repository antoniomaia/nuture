import React from 'react';

import Hero from '../../components/hero';
import secondary_page_styles from '../styles.module.scss';

const About = () => {
  return (
    <section className={secondary_page_styles.simple_page_container}>
      <Hero.Secondary headline={'About Us'} />
      <div className={secondary_page_styles.body}>
        <p>
          Ecological Earth was founded in 2020 and built on the vision that
          Sustainable Development should be a common tool for every user in
          every organization. With a team working for more than 5 years in
          Environment and Business Intelligence, we have created a solution that
          enables corporations/users to use a inovative footprint calculator in
          their everyday analysis and decision-making processes.
        </p>
      </div>
    </section>
  );
};

export default About;
