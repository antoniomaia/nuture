import React from 'react';

import Form from '../../components/form';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className={styles.getStarted}>
      <div className={styles.form}>
        <Form />
        <p>
          <small>
            We care about protecting your data. Here’s our{' '}
            <Link to={'/privacy-policy'}>Privacy Policy</Link>.
          </small>
        </p>
      </div>
      <div className={styles.info}>
        <h3>Early Access</h3>
        <p>
          Get in early to see how your business can go carbon neutral and be
          part of our worldwide network of carbon neutrals.
        </p>
      </div>
    </div>
  );
};

GetStarted.propTypes = {};

export default GetStarted;
