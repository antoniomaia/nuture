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
            Calculate the total amount of greenhouse gases that are generated by
            your actions.
          </p>
        </div>
      </div>

      <div className={cx(styles.item, styles.diagonal)}>
        <div className={styles.text}>
          <h2>Track</h2>
          <p>
            We help you track your emissions over time, making it easy for you
            to see how you’re doing against global reduction targets.
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
            We give you tips and feedback on your progress towards a lower
            carbon lifestyle
          </p>
        </div>
      </div>
    </div>
  );
};

export default Usp;
