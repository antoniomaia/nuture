import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../../components/hero';
import Emoji from '../../components/ui/emoji';

import secondary_page_styles from '../styles.module.scss';
import styles from './styles.module.scss';

const About = () => {
  return (
    <section className={secondary_page_styles.simple_page_container}>
      <Hero.Secondary headline={'About us'} />
      <div className={secondary_page_styles.body}>
        <h4>
          <span>Ecological Earth</span> was founded with the mission to provide
          the tools necessary for individuals and organizations to build a
          sustainable future and join the path of carbon neutrality.
        </h4>
        <p>
          Our team of engineers combine the passion of software and environment
          to create solutions that{' '}
          <strong>help everyone on the path to carbon neutrality</strong>.
        </p>
        <p>
          For individuals, we've created a calculator that gives individuals an
          estimate of the carbon footprint based on daily actions. To give it a
          try please click <Link to={'/calculator'}>here</Link>.
        </p>
        <p>
          Currently, we are focusing on the corporate world, creating a{' '}
          <strong>simple and affordable software solution</strong> to help
          businesses achieve their carbon neutrality. This allows a direct
          intervention where carbon emissions are most intensive.
        </p>
        <p>
          Our vision is the creation of a{' '}
          <strong>worldwide symbiosis of carbon neutral businesses</strong>. We
          believe in the interaction and partnerships of companies that share
          the same vision, restoring the balance of our planet.
        </p>
        <br />
        <br />
        <div className={styles.team}>
          <h2>The team</h2>
          <p>
            Located in <Emoji symbol="🇵🇹" label={'Portugal'} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
