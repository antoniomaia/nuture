import React from 'react';

import styles from './styles.module.scss';
import { Transition } from 'react-transition-group';
import TwitterLogo from './Twitter_Logo_White.svg';

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
    description: 'hours watching netflix',
    duration: 2500,
  },
];

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
              COMPARES TO
            </strong>
          )}
        </Transition>
      )}
      <div className={styles.equivalent_container}>
        {equivalentCarbonEmissions.map(
          ({ icon, value, description, duration, show }, index) => (
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
                  <strong>
                    {parseInt(carbonEmissionsResult / value, 10)}
                  </strong>{' '}
                  {description}
                  <a
                    href="https://twitter.com/intent/tweet?text=Ecological.Earth"
                    className={styles.tweet}
                  >
                    <img src={TwitterLogo} /> Tweet
                  </a>
                </p>
              )}
            </Transition>
          )
        )}
      </div>
    </section>
  );
};

export default IsLike;
