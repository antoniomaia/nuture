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
    JSON.parse(sessionStorage.getItem('answersee')) || INITIAL_STATE
  );

  useEffect(
    () => {
      sessionStorage.setItem('answersee', JSON.stringify(answers));
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
