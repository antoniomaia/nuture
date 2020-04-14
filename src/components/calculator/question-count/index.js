import React from 'react';
import styles from './styles.module.scss';

const QuestionCount = ({ activeIndex, total }) => {
  return (
    <ul className={styles.dots}>
      {Array(total)
        .fill(0)
        .map((e, index) => (
          <li
            key={`dot_${index}`}
            className={index === activeIndex ? styles.active : ''}
          />
        ))}
    </ul>
  );
};

export default QuestionCount;
