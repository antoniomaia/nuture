import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import { questions } from '../../constants/questions';
import Question from './question';
import QuestionCount from './question-count';
import FinalResult from './final-result';
import Navigation from './navigation';

import styles from './styles.module.scss';

const Calculator = ({ answers, setAnswers }) => {
  const isFinished = answers.activeQuestionIndex >= questions.length;
  const handleOnChange = (type, value, next = false) => () => {
    setAnswers({
      ...answers,
      [type]: value,
      activeQuestionIndex: next
        ? answers.activeQuestionIndex + 1
        : answers.activeQuestionIndex,
    });
  };
  const currentStep = answers.activeQuestionIndex;
  const handleNext = () => {
    const nextStep = currentStep + 1;
    setAnswers({
      ...answers,
      activeQuestionIndex: nextStep,
    });
  };
  const handlePrevious = () => {
    const nextStep = currentStep - 1;
    setAnswers({ ...answers, activeQuestionIndex: nextStep });
  };
  const question = questions.find((question, index) => currentStep === index);

  return (
    <div className={styles.question_container}>
      {!isFinished && (
        <SwitchTransition>
          <CSSTransition
            key={currentStep}
            timeout={200}
            classNames={{
              enter: styles['fade-enter'],
              enterActive: styles['fade-enter-active'],
              exit: styles['fade-exit'],
              exitActive: styles['fade-exit-active'],
            }}
          >
            <>
              <Question
                question={question}
                active={true}
                answers={answers}
                setAnswers={handleOnChange}
              />
              <QuestionCount
                total={questions.length}
                activeIndex={currentStep}
              />
              <Navigation
                currentStep={currentStep}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
              />
            </>
          </CSSTransition>
        </SwitchTransition>
      )}
      {isFinished && (
        <div className={styles.finish}>
          <FinalResult />
        </div>
      )}
    </div>
  );
};

export default Calculator;
