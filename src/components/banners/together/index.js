import React from "react";

import styles from "./styles.module.scss";

const Together = () => {
  return (
    <article className={styles.together}>
      <h1>Facing Climate Change Together</h1>
      <p>
        While we don’t have all the answers, we’ve put together a collection of
        questions to help you get started.
      </p>
      <a>Learn more</a>
    </article>
  );
};

export default Together;
