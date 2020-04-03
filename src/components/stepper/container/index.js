import React, { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import styles from "./styles.module.scss";
import { questions } from "../../../constants/questions";
import Step from "../step";
import Dots from "../dots";

const StepperContainer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [finish, setFinish] = useState(null);
  const handleNext = () => {
    const nextStep = currentStep + 1;
    if (nextStep >= questions.length) {
      setFinish("🎉🎉🎉");
    }
    setCurrentStep(nextStep);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const step = questions.find((question, index) => currentStep === index);
  return (
    <div className={styles.question_container}>
      {!finish && (
        <SwitchTransition>
          <CSSTransition
            key={currentStep}
            timeout={200}
            classNames={{
              enter: styles["fade-enter"],
              enterActive: styles["fade-enter-active"],
              exit: styles["fade-exit"],
              exitActive: styles["fade-exit-active"]
            }}
          >
            <>
              <Step question={step} active={true} onClick={handleNext} />
              <Dots size={questions.length} active={currentStep} />
              {currentStep > 0 && (
                <button onClick={handlePrevious} className={styles.previous}>
                  back
                </button>
              )}
            </>
          </CSSTransition>
        </SwitchTransition>
      )}
      {finish && <div className={styles.finish}>{finish}</div>}
    </div>
  );
};

export default StepperContainer;
