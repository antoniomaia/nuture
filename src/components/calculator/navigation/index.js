import React from 'react';

import styles from './styles.module.scss';

const Navigation = ({ currentStep, handlePrevious, handleNext }) => {
  return (
    <>
      <button
        disabled={currentStep <= 0}
        onClick={handlePrevious}
        className={styles.previous}
      >
        Back
      </button>
      <button onClick={handleNext} className={styles.next}>
        Next
      </button>
    </>
  );
};

export default Navigation;
