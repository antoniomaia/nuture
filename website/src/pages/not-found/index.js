import React from 'react';

import styles from './styles.module.scss'

const NotFound = () => {
  return (
    <div className={styles.root}>
      <h1>Oops! Page not found!</h1>
    </div>
  );
};

NotFound.propTypes = {

};

export default NotFound;