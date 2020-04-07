import React from "react";

import styles from "./styles.module.scss";

const Together = () => {
  return (
    <article className={styles.together}>
      <h1>Facing Climate Change Together</h1>
      <p>
        While we don’t have all the answers, we are building tools to help you
        get started. Calculate your CO2 emissions. Understand the impact of your
        carbon footprint. Reduce your waste.
      </p>
      <a>Learn more</a>
    </article>
  );
};

export default Together;
