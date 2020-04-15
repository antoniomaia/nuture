import React, { useState, useEffect } from 'react';

import Calculator from '../../components/calculator';

import styles from './styles.module.scss';

const INITIAL_STATE = {
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
        <h2>Calculate your carbon footprint</h2>
        <p>
          We need to get to know your green habits. Start by answering some
          questions.
        </p>
        <Calculator answers={answers} setAnswers={setAnswers} />
      </div>
    </section>
  );
};

export default CalculatorPage;
