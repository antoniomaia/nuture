import React from 'react';
import styles from './styles.module.scss';
import Title from '../ui/text/title';

const benefits = [
  {
    title: 'Simple',
    description:
      'With an intuitive approach become carbon neutral in 5 minutes',
  },
  {
    title: 'Trusted',
    description:
      'The Ecological Earth badge means you can share your climate status with confidence',
  },
  {
    title: 'Affordable',
    description:
      'Without the need to hire external consultants, going carbon neutral is now accessible to every business',
  },
];

const Benefits = () => {
  return (
    <section className={styles.container}>
      <Title>
        <strong>Our product</strong>
      </Title>
      <div>
        {benefits.map((item) => (
          <article key={item.title} className={styles.benefit}>
            <h4>{item.title}</h4>
            <span />
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
