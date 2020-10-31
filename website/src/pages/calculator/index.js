import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Calculator from '../../components/calculator';

import styles from './styles.module.scss';

export const INITIAL_STATE = {
  activeQuestionIndex: 0,
  country: 'world',
  travelDistancePerYear: 15000,
};

const CalculatorPage = () => {
  const [answers, setAnswers] = useState(
    JSON.parse(sessionStorage.getItem('answers_ee')) || INITIAL_STATE
  );

  useEffect(() => {
    sessionStorage.setItem('answers_ee', JSON.stringify(answers));
  }, [answers]);

  return (
    <section className={styles.root}>
      <div className={styles.middle}>
        <h2>Carbon Footprint Calculator</h2>
        <p className={styles.explanation}>
          You can calculate your personal carbon emissions right now by
          answering a few questions about your lifestyle. If you want to measure
          the climate impact of your business click{' '}
          <Link to={'/get-started'}>here</Link>.
        </p>
        <Calculator answers={answers} setAnswers={setAnswers} />
      </div>
    </section>
  );
};

export default CalculatorPage;
