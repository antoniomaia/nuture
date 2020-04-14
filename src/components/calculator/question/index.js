import React from 'react';
import styles from './styles.module.scss';
import AnswerOption from '../answer-option';

const Question = ({
  active = false,
  question,
  onClick,
  answers,
  setAnswers,
}) => {
  if (!active) {
    return null;
  }
  const { title, description, choices, answerType } = question;
  return (
    <div className={styles.step}>
      <h4 className={styles.title}>{title}</h4>
      {/* <p className={styles.description}>{description}</p> */}
      <AnswerOption
        answers={answers}
        type={answerType}
        choices={choices}
        onClick={onClick}
        setAnswers={setAnswers}
      />
    </div>
  );
};

export default Question;
