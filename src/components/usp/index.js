import React from "react";
import cx from "classnames";

import styles from "./styles.module.scss";

const Usp = () => {
  return (
    <div className={styles.usp}>
      <div className={styles.item}>
        <div className={styles.icon}>
          <img src={"images/c.svg"} />
        </div>
        <div className={styles.text}>
          <h2>Calculate</h2>
          <p>
            description description description description description
            description description description description
          </p>
        </div>
      </div>

      <div className={cx(styles.item, styles.diagonal)}>
        <div className={styles.text}>
          <h2>Track</h2>
          <p>
            description description description description description
            description description description description
          </p>
        </div>
        <div className={styles.icon}>
          <img src={"images/s.svg"} />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.icon}>
          <img src={"images/r.svg"} />
        </div>
        <div className={styles.text}>
          <h2>Reduce</h2>
          <p>
            description description description description description
            description description description description
          </p>
        </div>
      </div>
    </div>
  );
};

export default Usp;
