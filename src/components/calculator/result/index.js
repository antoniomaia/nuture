import React from 'react';
import PropTypes from 'prop-types';
import { carbonEmissionMealTypePerYear } from '../../../co2e/food/meals';
import {
  carbonEmissionTransportTypeWithDistance,
  carbonEmissionFlightType,
} from '../../../co2e/transport';
import { INITIAL_STATE } from '../../../pages/calculator';
import { TRANSPORT } from '../../../co2e/transport';
import { carbonEmissionsElectricity } from '../../../co2e/electricity';

import styles from './styles.module.scss';

const Result = ({ answers, setAnswers }) => {
  const carbonEmissions =
    carbonEmissionMealTypePerYear(answers.dietPreference) +
    carbonEmissionTransportTypeWithDistance(
      answers.travelMethod,
      answers.travelDistancePerYear
    ) +
    carbonEmissionFlightType(
      TRANSPORT.SHORT_HAUL_FLIGHT,
      parseInt(answers.travelDomesticFlightsPerYear, 10) * 2
    ) +
    carbonEmissionFlightType(
      TRANSPORT.LONG_HAUL_FLIGHT,
      parseInt(answers.travelInternationalFlightsPerYear, 10) * 2
    ) +
    carbonEmissionsElectricity(answers.electricityKwhPerMonth) * 12;
  return (
    <section>
      <h3>Your carbon footprint is:</h3>
      <br />
      <p className={styles.result}>
        <span className={styles.number}>{carbonEmissions.toFixed(1)} </span>
        tons CO
        <sub>2</sub>
        /year
      </p>
      <br />
      <button
        onClick={() => {
          setAnswers(INITIAL_STATE);
        }}
      >
        <strong>RESET</strong>
      </button>
      <p>
        HELP US SPREAD THE WORD Share your results and help us make the .. more
        aware of their impact, and what they can do about it.
      </p>
      <br />
      <p>facebook, instagram</p>
      <p>
        We proudly annouce that we are working on the easiest and most user
        friendly app to help you reduce the climate impact of your daily
        choices.
      </p>
      <p>Sign up for beta access</p>
      <input type="email" />
      <button>Get Early Access!</button>
    </section>
  );
};

Result.propTypes = {
  answers: PropTypes.shape({
    activeQuestionIndex: PropTypes.number,
    country: PropTypes.string,
    travelDistancePerYear: PropTypes.number,
    travelMethod: PropTypes.string,
    travelDomesticFlightsPerYear: PropTypes.number,
    travelInternationalFlightsPerYear: PropTypes.number,
    dietPreference: PropTypes.string,
  }),
};

Result.defaultProps = {
  answers: PropTypes.shape({
    activeQuestionIndex: 6,
    country: 'af',
    travelDistancePerYear: 15000,
    travelMethod: 'car',
    travelDomesticFlightsPerYear: 6,
    travelInternationalFlightsPerYear: 2,
    dietPreference: 'lowMeat',
  }),
};

export default Result;
