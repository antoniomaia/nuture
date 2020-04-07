import React from "react";

import CalculatorStepper from "../../components/calculator";

import styles from "./styles.module.scss";

const Calculator = () => {
  return (
    <section className={styles.root}>
      <div className={styles.middle}>
        <h2>Calculate your carbon footprint</h2>
        <p>
          We need to get to know your green habits. Start by answering some
          questions.
        </p>
        <CalculatorStepper />
      </div>
    </section>
  );
};

export default Calculator;
