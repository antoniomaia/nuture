import React from 'react';

import styles from './styles.module.scss';
import Measure from '../ui/icons/measure';
import Reduce from '../ui/icons/reduce';
import Offset from '../ui/icons/offset';
import Share from '../ui/icons/share';
import Title from '../ui/text/title';

const steps = [
  {
    number: 1,
    name: 'Measure',
    icon: <Measure />,
    description:
      'Measure your carbon emissions directly from our calculator. Convert complex data in simple tracks of carbon emissions.',
  },
  {
    number: 2,
    name: 'Reduce',
    icon: <Reduce />,
    description:
      'Reduce your carbon emissions by following our tips. Environmental specialists are ready to help your business.',
  },
  {
    number: 3,
    name: 'Offset',
    icon: <Offset />,
    description:
      'Offset the rest and make a positive impact in the world. Incorporate global partners with the highest standards.',
  },
  {
    number: 4,
    name: 'Share',
    icon: <Share />,
    description:
      'Share your carbon neutrality with our badge. Get all the marketing material you need to spread the message.',
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.root}>
      <Title>
        <strong>How it works</strong>
      </Title>
      <p className={styles.desc}>
        Our innovative solution helps your business along the way to carbon
        neutral. Forget complex spreadsheets, we've created a simple tool that's
        easy to use.
      </p>
      <div className={styles.step_container}>
        {steps.map((step) => (
          <div key={step.number} className={styles.step}>
            <div className={styles.number}>
              <div>{step.number}</div>
            </div>
            <div className={styles.info}>
              <span className={styles.icon}>{step.icon}</span>
              <p className={styles.name}>{step.name}</p>
              <p className={styles.description}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

HowItWorks.propTypes = {};

export default HowItWorks;
