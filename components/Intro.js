import React from "react";
import styles from "../styles/Intro.module.scss";
function Intro(props) {
  return (
    <div className={styles.introContainer}>
      <article className={styles.intro}>
        My name is William, computer science graduate from the University of
        Calgary. My passion lies in creating software that will make a
        meaningful impact on peoples day to day life. Since graduating I have
        helped local businesses develop static to full stack websites. I hope to
        expand my knowledge within this field and be able to solve complex
        problems through programming.
      </article>
    </div>
  );
}

export default Intro;
