import React from 'react';

import styles from './styles.module.scss';
import Send from '../ui/icons/send';

const GetInTouch = () => {
  return (
    <section className={styles.getInTouch}>
      <Send />
      <h4>Get in touch</h4>
      <ul>
        <li>
          Want to find out how Ecological Earth can solve problems specific to
          your business? Let's talk.
        </li>
        <li>Come say hi on our live chat if you have any questions.</li>
      </ul>
    </section>
  );
};

GetInTouch.propTypes = {};

export default GetInTouch;
