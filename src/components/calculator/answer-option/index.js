import React from 'react';
import Select from 'react-select';
import cx from 'classnames';

import styles from './styles.module.scss';

const AnswerOption = ({ id, type, choices, answers, setAnswers }) => {
  switch (type) {
    case 'dropdown': {
      const options = choices.map(({ name, countryCode }) => ({
        value: countryCode,
        label: name,
      }));
      const onCountryChange = value => {
        setAnswers('country', value.value);
      };
      const country = options.find(
        element => element.value === answers.country
      );

      return (
        <div className={styles.center}>
          <img src={`flags/${answers.country}.svg`} className={styles.flag} />
          <Select
            value={country}
            placeholder={'Select country...'}
            options={options}
            className={styles.country_dropdown}
            onChange={onCountryChange}
          />
        </div>
      );
    }

    case 'single': {
      return (
        <ul className={styles.single}>
          {choices.map((choice, index) => (
            <li
              key={`choice_${index}`}
              className={cx(styles.item, {
                [styles.selected]: choice === answers[id],
              })}
              onClick={setAnswers(id, choice)}
            >
              <input type="radio" name={choice} value={choice} />
              <label htmlFor={choice}>{choice}</label>
            </li>
          ))}
        </ul>
      );
    }

    case 'input': {
      const onChange = id => event => {
        setAnswers(id, event.target.value)();
      };
      return (
        <div className={styles.input}>
          <input
            id="distance"
            type="number"
            value={answers[id]}
            onChange={onChange(id)}
          />
          <select name="metric" id="metric-select">
            <option value="km">km</option>
            <option value="miles">miles</option>
          </select>
        </div>
      );
    }
    default:
      return <div />;
  }
};

export default AnswerOption;
