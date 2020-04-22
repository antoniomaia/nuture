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
    JSON.parse(sessionStorage.getItem('answers_ee')) || INITIAL_STATE
  );

  useEffect(
    () => {
      sessionStorage.setItem('answers_ee', JSON.stringify(answers));
    },
    [answers]
  );

  return (
    <section className={styles.root}>
      <div className={styles.middle}>
        <h2>Carbon Footprint Calculator</h2>
        <Calculator answers={answers} setAnswers={setAnswers} />
      </div>
    </section>
  );
};

export default CalculatorPage;
