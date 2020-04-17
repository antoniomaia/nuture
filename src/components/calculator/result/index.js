import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { carbonEmissionMealTypePerYear } from '../../../co2e/food/meals';
import {
  carbonEmissionTransportTypeWithDistance,
  carbonEmissionFlightType,
} from '../../../co2e/transport';
import { INITIAL_STATE } from '../../../pages/calculator';
import { TRANSPORT } from '../../../co2e/transport';
import { carbonEmissionsElectricity } from '../../../co2e/energy/electricity';
import { carbonEmissionsPurchase } from '../../../co2e/purchase';
import { animateValue } from '../../../utils';

import styles from './styles.module.scss';

const Result = ({ answers, setAnswers }) => {
  const resultEl = useRef(null);
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
    carbonEmissionsElectricity(answers.electricityKwhPerMonth) * 12 +
    carbonEmissionsPurchase(answers.purchaseAmountPerMonth) * 12;

  const carbonEmissionsResult = parseFloat(carbonEmissions.toFixed(1));

  return (
    <section>
      <article className={styles.results_container}>
        <h3>Your carbon footprint is</h3>
        <p className={styles.result}>
          <span className={styles.number} ref={resultEl}>
            {animateValue(resultEl, 1, carbonEmissionsResult, 100)}
          </span>
          <span>tons / year</span>
        </p>
      </article>
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
    electricityKwhPerMonth: PropTypes.number,
    purchaseAmountPerMonth: PropTypes.number,
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
    electricityKwhPerMonth: 0,
    purchaseAmountPerMonth: 0,
  }),
};

export default Result;
