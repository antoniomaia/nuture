import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { useLocation, Link } from 'react-router-dom';

import Logo from '../logo';

import styles from './styles.module.scss';

const Header = () => {
  const [isSolid, setIsSolid] = useState(false);
  const location = useLocation();

  const onScrollEventListener = () => {
    if (window.pageYOffset > 500) {
      setIsSolid(true);
    } else {
      setIsSolid(false);
    }
  };

  useEffect(
    () => {
      if (location && location.pathname !== '/') {
        setIsSolid(true);
      } else {
        setIsSolid(false);
        window.addEventListener('scroll', onScrollEventListener);
      }

      return () => {
        window.removeEventListener('scroll', onScrollEventListener);
      };
    },
    [location]
  );

  return (
    <header className={cx(styles.header, { [styles.solid]: isSolid })}>
      <Logo type={isSolid ? 'black' : 'white'} />
      <Link to={'/blog'} className={styles.blog}>Blog</Link>
    </header>
  );
};

export default Header;
