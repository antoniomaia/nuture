import React from 'react';
import Select from 'react-select';

import styles from './styles.module.scss';

const AnswerOption = ({ type, choices, onClick, answers, setAnswers }) => {
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
              className={styles.item}
              onClick={onClick}
            >
              <input type="radio" name={choice} value={choice} />
              <label htmlFor={choice}>{choice}</label>
            </li>
          ))}
        </ul>
      );
    }
    default:
      return <div />;
  }
};

export default AnswerOption;
