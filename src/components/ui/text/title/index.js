import React from 'react';
import styles from './styles.module.scss';

const Title = ({ tag, children }) => {
  const TagName = tag || 'h3';
  return <TagName className={styles.title}>{children}</TagName>;
};

export default Title;
