import React from 'react';
import PropTypes from 'prop-types';
import Form from '../../components/form';
import styles from './styles.module.scss';
const GetStarted = () => {
  return (
    <div className={styles.getStarted}>
      <div className={styles.form}>
        <Form />
      </div>
      <div className={styles.info}>
        <h3>First step on carbon neutrality</h3>
        <p>Sign up to be part of our worldwide network of carbon neutrals.</p>
        <p>
          Ecological Earth needs the contact information you provide to us to
          contact you about our products and services. You may unsubscribe from
          these communications at any time. For information on how to
          unsubscribe, as well as our privacy practices and commitment to
          protecting your privacy, please review our Privacy Policy.
        </p>
      </div>
    </div>
  );
};

GetStarted.propTypes = {};

export default GetStarted;
