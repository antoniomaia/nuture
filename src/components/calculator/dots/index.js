import React from "react";
import styles from "./styles.module.scss";

const Dots = ({ size, active }) => {
  return (
    <ul className={styles.dots}>
      {Array(size)
        .fill(0)
        .map((e, index) => (
          <li
            key={`dot_${index}`}
            className={index === active ? styles.active : ""}
          ></li>
        ))}
    </ul>
  );
};

export default Dots;
