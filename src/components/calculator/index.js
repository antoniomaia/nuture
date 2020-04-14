import React, { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styles from './styles.module.scss';

import { questions } from '../../constants/questions';
import Question from './question';
import QuestionCount from './question-count';
import FinalResult from './final-result';
import Navigation from './navigation';

const Calculator = ({ answers, setAnswers }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [finish, setFinish] = useState(false);
  const handleOnChange = (type, value) => () => {
    setAnswers({ ...answers, [type]: value });
  };
  const handleNext = () => {
    const nextStep = currentStep + 1;
    if (nextStep >= questions.length) {
      setFinish(true);
    }
    setCurrentStep(nextStep);
  };
  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };
  const question = questions.find((question, index) => currentStep === index);

  return (
    <div className={styles.question_container}>
      {!finish && (
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
      {finish && (
        <div className={styles.finish}>
          <FinalResult />
        </div>
      )}
    </div>
  );
};

export default Calculator;
