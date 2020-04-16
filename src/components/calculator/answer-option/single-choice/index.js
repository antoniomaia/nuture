import React, { useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

const SingleChoice = ({ choices, answers, setAnswers, id }) => {
  const inputInsertedManually = choices.find(
    c => c.value === parseInt(answers[id]),
    10
  );
  const [isManual, setIsManual] = useState(!inputInsertedManually);
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
          const selectedValue = isManual ? answers[id] : undefined;
          return (
            <li
              key={`choice_${index}`}
              className={cx(styles.item, {
                [styles.selected]: choice.value === answers[id] || isManual,
              })}
            >
              <input
                type="number"
                name={choice.name}
                placeholder={choice.name}
                className={styles.manual_input}
                onChange={onManualChange(id)}
                value={selectedValue}
              />
            </li>
          );
        }
        return (
          <li
            key={`choice_${index}`}
            className={cx(styles.item, {
              [styles.selected]: choice.key === answers[id],
            })}
            onClick={onChange(id, choice.key, true)}
          >
            <input type="radio" name={choice.name} value={choice.key} />
            <label htmlFor={choice.key}>{choice.name}</label>
          </li>
        );
      })}
    </ul>
  );
};

export default SingleChoice;
