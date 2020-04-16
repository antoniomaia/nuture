import React, { useState, useEffect } from 'react';

import Calculator from '../../components/calculator';

import styles from './styles.module.scss';

export const INITIAL_STATE = {
  activeQuestionIndex: 0,
  country: 'af',
  travelDistancePerYear: 15000,
};

const CalculatorPage = () => {
  const [answers, setAnswers] = useState(
    JSON.parse(localStorage.getItem('answers')) || INITIAL_STATE
  );

  useEffect(
    () => {
      localStorage.setItem('answers', JSON.stringify(answers));
    },
    [answers]
  );

  return (
    <section className={styles.root}>
      <div className={styles.middle}>
        <h2>Carbon Footprint Calculator</h2>
        <br />
        <p className={styles.paragraph}>
          A carbon footprint is the amount of greenhouse gases (primarily carbon
          dioxide) released into the atmosphere by a particular human action.
          That could be from anything - an activity, an item, a lifestyle, a
          company, a country or even the whole world.
        </p>
        <p className={styles.paragraph}>
          Our online calculator can give you a rough estimate of your carbon
          footprint based on your habits. Start by answering some questions.
        </p>
        <br />
        <Calculator answers={answers} setAnswers={setAnswers} />
      </div>
    </section>
  );
};

export default CalculatorPage;
