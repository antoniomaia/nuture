import React from 'react';

import styles from './styles.module.scss';

import Mailchimp from '../../../components/mailchimp';

const Subscribe = () => {
  return (
    <article className={styles.root}>
      <h3>This is the begin, be part of it.</h3>
      <p>
        <small>
          Subscribe for the latest news and updates about our product.
        </small>
      </p>
      <Mailchimp />
    </article>
  );
};

export default Subscribe;
