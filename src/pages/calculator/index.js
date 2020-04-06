import React from "react";

import CalculatorStepper from "../../components/calculator";

import styles from "./styles.module.scss";

const Calculator = () => {
  return (
    <section className={styles.root}>
      <CalculatorStepper />
    </section>
  );
};

export default Calculator;
