import React from 'react';
import styles from './styles.module.scss';
import AnswerOption from '../answer-option';

const Question = ({ active = false, question, answers, setAnswers }) => {
  if (!active) {
    return null;
  }
  const { id, title, description, choices, answerType } = question;
  return (
    <div className={styles.step}>
      <h4 className={styles.title}>{title}</h4>
      {/* <p className={styles.description}>{description}</p> */}
      <AnswerOption
        id={id}
        answers={answers}
        type={answerType}
        choices={choices}
        setAnswers={setAnswers}
      />
    </div>
  );
};

export default Question;
