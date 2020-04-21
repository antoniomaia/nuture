import React from 'react';
import styles from './styles.module.scss';
import AnswerOption from '../answer-option';

const Question = ({ active = false, question, answers, setAnswers }) => {
  if (!active || !question) {
    return null;
  }
  const { id, title, choices, answerType } = question;
  return (
    <div className={styles.step}>
      <h4 className={styles.title}>{title}</h4>
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
