import React from 'react';

import styles from './styles.module.scss';
import { Transition } from 'react-transition-group';
import TwitterLogo from './Twitter_Logo_White.svg';
import { Link } from 'react-router-dom';

const equivalentCarbonEmissions = [
  {
    show: false,
    key: 'iphone',
    value: 0.079,
    icon: '📱',
    description: 'iPhone X produced',
    duration: 500,
  },
  {
    key: 'tree',
    value: 0.181,
    icon: '🌲',
    description: 'trees cut per year',
    duration: 1500,
  },
  {
    key: 'netflix',
    value: 0.0042,
    icon: '🖥️',
    description: 'hours watching Netflix',
    duration: 2500,
  },
];

const textToShare = (total, number, share) => {
  return `My carbon footprint is ${total} tons per year, which compares to ${number} ${share}. 
	https://ecological.earth&hashtags=climatechange,carbonfootprint`;
};

const IsLike = ({ animation, carbonEmissionsResult }) => {
  const defaultStyle = {
    //transition: `opacity 1000ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <section className={styles.root}>
      {!animation && (
        <Transition in={!animation} timeout={500}>
          {state => (
            <strong
              style={{
                transition: `opacity 500ms linear`,
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              THE EQUIVALENT OF
            </strong>
          )}
        </Transition>
      )}
      <div className={styles.equivalent_container}>
        {equivalentCarbonEmissions.map(
          ({ icon, value, description, duration, show }, index) => {
            const footprint = parseInt(carbonEmissionsResult / value, 10);
            return (
              <Transition in={!animation} timeout={duration}>
                {state => (
                  <p
                    className={styles.equivalent_item}
                    style={{
                      transition: `opacity 500ms linear`,
                      transitionDelay: `${duration}ms`,
                      ...defaultStyle,
                      ...transitionStyles[state],
                    }}
                  >
                    <span className={styles.icon}>{icon}</span>
                    <strong>{footprint}</strong> {description}
                    <a
                      href={`https://twitter.com/intent/tweet?text=${textToShare(
                        carbonEmissionsResult,
                        footprint,
                        description
                      )}`}
                      className={styles.tweet}
                    >
                      <img src={TwitterLogo} alt={'Twitter logo'} /> Tweet
                    </a>
                  </p>
                )}
              </Transition>
            );
          }
        )}
      </div>
      <Link to={'/carbon-report-sources'}>More info about the results</Link>
    </section>
  );
};

export default IsLike;
