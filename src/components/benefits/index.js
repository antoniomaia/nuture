import React from 'react';
import styles from './styles.module.scss';
import Title from '../ui/text/title';

const benefits = [
  { title: 'Simple', description: 'Become carbon neutral in 5 minutes' },
  { title: 'Trusted', description: 'Share our badge with your customers' },
  { title: 'Affordable', description: 'In all sectors without extra expenses' },
];

const Benefits = () => {
  return (
    <section className={styles.container}>
      <Title>Our product</Title>
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
