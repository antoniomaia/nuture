import React from "react";

import styles from "./styles.module.scss";
import "./styles.module.scss";

const Step = ({ active = false, question, onClick }) => {
  if (!active) {
    return null;
  }
  const { title, description, choices } = question;
  return (
    <div className={styles.step}>
      <h4 className={styles.title}>{title}</h4>
      {/* <p className={styles.description}>{description}</p> */}
      <ul>
        {choices.map((choice, index) => (
          <li key={`choice_${index}`} className={styles.item} onClick={onClick}>
            <input type="radio" name={choice} value={choice} />
            <label htmlFor={choice}>{choice}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Step;
