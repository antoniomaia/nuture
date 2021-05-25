import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../logo';

import styles from './styles.module.scss';

const Header = () => {
  const [isSolid, setIsSolid] = useState(false);
  const location = useLocation();

  const onScrollEventListener = () => {
    if (window.pageYOffset > 100) {
      setIsSolid(true);
    } else {
      setIsSolid(false);
    }
  };

  useEffect(() => {
    if (location && location.pathname !== '/') {
      setIsSolid(true);
    } else {
      setIsSolid(false);
      window.addEventListener('scroll', onScrollEventListener);
    }

    return () => {
      window.removeEventListener('scroll', onScrollEventListener);
    };
  }, [location]);

  return (
    <header className={cx(styles.header, { [styles.solid]: isSolid })}>
      <Logo type={isSolid ? 'black' : 'white'} />
      <div>
        <a
          href="https://app.ecological.earth/login"
          className={styles.button}
          style={{ marginRight: '1rem' }}
        >
          Log In
        </a>
        <a
          href="https://app.ecological.earth/register"
          className={`${styles.button} ${styles.primary}`}
        >
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;
