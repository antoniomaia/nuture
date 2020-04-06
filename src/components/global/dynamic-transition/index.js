import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import styles from "./styles.module.scss";

const DynamicTransition = ({ children, location }) => {
  return (
    <TransitionGroup
      childFactory={child =>
        React.cloneElement(child, {
          classNames: {
            enter: styles["fade-enter"],
            enterActive: styles["fade-enter-active"],
            exit: styles["fade-exit"],
            exitActive: styles["fade-exit-active"]
          },
          timeout: 300
        })
      }
    >
      <CSSTransition key={location.key}>{children}</CSSTransition>
    </TransitionGroup>
  );
};

export default DynamicTransition;
