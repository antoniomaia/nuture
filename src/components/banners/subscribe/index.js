import React from 'react';

import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

import Mailchimp from '../../../components/mailchimp';

const Subscribe = () => {
  return (
    <article className={styles.root}>
      <h3>Are you interested?</h3>
      <div className={styles.body}>
        <p>Sign up today to get early access</p>
      </div>
      <Mailchimp />
      <p>
        <small>
          We care about protecting your data. Here’s our{' '}
          <Link to={'/privacy-policy'}>Privacy Policy</Link>.
        </small>
      </p>
    </article>
  );
};

export default Subscribe;
