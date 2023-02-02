import React from "react";
import styles from "../styles/Intro.module.scss";
function Intro(props) {
  return (
    <div className={styles.introContainer}>
      <article className={styles.intro}>
        My name is William, computer science graduate from the University of
        Calgary. It wasn’t until my fourth year that I truly found a passion in
        web development and decided to pursue a career in this field. Since
        graduating I have helped local businesses develop static to full stack
        websites. I hope to expand my knowledge within this field and be able to
        solve complex problems through programming.
        <p>I am currently open to any web development opportunities!</p>
      </article>
    </div>
  );
}

export default Intro;
