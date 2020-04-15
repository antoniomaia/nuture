import React, { useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

const SingleChoice = ({ choices, answers, setAnswers, id }) => {
  const [isManual, setIsManual] = useState(false);
  const onChange = (id, value) => () => {
    setIsManual(false);
    setAnswers(id, value, true)();
  };
  const onManualChange = id => event => {
    setIsManual(true);
    setAnswers(id, event.target.value)();
  };

  return (
    <ul className={styles.single}>
      {choices.map((choice, index) => {
        if (choice.value === 'manual') {
          return (
            <li
              key={`choice_${index}`}
              className={cx(styles.item, {
                [styles.selected]: choice.value === answers[id],
              })}
            >
              <input
                type="number"
                name={choice.name}
                placeholder={choice.name}
                className={styles.manual_input}
                onChange={onManualChange(id)}
              />
            </li>
          );
        }
        return (
          <li
            key={`choice_${index}`}
            className={cx(styles.item, {
              [styles.selected]: choice.value === answers[id],
            })}
            onClick={onChange(id, choice.value, true)}
          >
            <input type="radio" name={choice.name} value={choice.value} />
            <label htmlFor={choice.value}>{choice.name}</label>
          </li>
        );
      })}
    </ul>
  );
};

export default SingleChoice;
