import React from 'react';
import Select from 'react-select';

import styles from './styles.module.scss';
import SingleChoice from './single-choice';
import Emoji from '../../ui/emoji';

// https://react-select.com/styles#overriding-the-theme
const selectTheme = theme => ({
  ...theme,
  borderRadius: 8,
  colors: {
    ...theme.colors,
    primary25: '#eef6ee',
    primary: '#277a21',
    primary50: '#f4f4fa',
  },
});

const AnswerOption = ({ id, type, choices, answers, setAnswers }) => {
  switch (type) {
    case 'dropdown': {
      const options = choices.map(({ name, countryCode }) => ({
        value: countryCode,
        label: name,
      }));
      const onCountryChange = value => {
        setAnswers('country', value.value)();
      };

      const country = options.find(
        element => element.value === answers.country
      ) || { label: 'World', value: 'world' };

      return (
        <div className={styles.center}>
          <div className={styles.flag_container}>
            {answers.country !== 'world' && (
              <img
                src={`flags/${answers.country}.svg`}
                alt={'country flag'}
                className={styles.flag}
              />
            )}
            {answers.country === 'world' && (
              <Emoji symbol={'🌍'} alt={'World'} className={styles.world} />
            )}
          </div>
          <Select
            value={country}
            placeholder={'Select country...'}
            options={options}
            className={styles.country_dropdown}
            onChange={onCountryChange}
            theme={selectTheme}
          />
        </div>
      );
    }

    case 'single-choice': {
      return (
        <SingleChoice
          id={id}
          choices={choices}
          answers={answers}
          setAnswers={setAnswers}
        />
      );
    }

    case 'input': {
      const onChange = id => event => {
        setAnswers(id, event.target.value)();
      };
      const metrics = [
        {
          value: 'km',
          label: 'Km',
        },
        {
          value: 'miles',
          label: 'Miles',
        },
      ];
      return (
        <div className={styles.input}>
          <input
            id="distance"
            type="number"
            placeholder={15000}
            onChange={onChange(id)}
            maxLength={10}
            min="1"
            step="1"
          />
          <Select
            defaultValue={metrics[0]}
            options={metrics}
            theme={selectTheme}
            styles={{
              container: (provided, state) => ({
                ...provided,
                border: 'none',
              }),
              control: provided => ({
                ...provided,
                border: 'none',
                width: 60,
                background: 'var(--grey-light)',
                borderRadius: '0 8px 8px 0',
              }),
              indicatorsContainer: () => ({ display: 'none' }),
            }}
          />
        </div>
      );
    }
    default:
      return <div />;
  }
};

export default AnswerOption;
