import React from "react";
import styles from "../styles/ProjectInfo.module.scss";
import { Fjalla_One, Abel } from "@next/font/google";
import Image from "next/image";
import Iframe from "react-iframe";
const fjalla = Fjalla_One({
  subsets: ["latin"],
  weight: ["400"],
});

const abel = Abel({
  subsets: ["latin"],
  weight: ["400"],
});

function ProjectInfo(props) {
  return (
    <div className={styles.ProjectInfoContainer}>
      <section className={styles.section}>
        <span
          className={`${fjalla.className} ${styles.title}`}
          data-content={props.project.title}
        >
          {props.project.title}
        </span>
        <div className={`${abel.className} ${styles.headerInfo}`}>
          <span>{props.project.infoOne}</span>
          <span>{props.project.infoTwo}</span>
          <span className={styles.overviewTitle}>Overview</span>
        </div>

        <div className={styles.overview}>{props.project.overview}</div>
        <div className={styles.techStack}>
          {props.project.techStack.map((tech, i) => {
            return <span key={"tech" + i}>{tech}</span>;
          })}
        </div>
        <div className={`${abel.className} ${styles.gallary}`}>
          <span>Gallary</span>
          {props.project.gallary.map((image, i) => {
            return (
              <div className={styles.imageContainer} key={"gallary-image" + i}>
                <Image
                  className={styles.image}
                  alt={props.project.title + " Image"}
                  src={props.project.gallary[i]}
                  fill
                ></Image>
              </div>
            );
          })}
          {props.project.videos.map((video, i) => {
            return (
              <div key={"video" + i} className={styles.videoContainer}>
                <Iframe
                  className={styles.video}
                  url="https://www.youtube.com/embed/4AqHY7XUyAM"
                  position="relative"
                  width="100%"
                ></Iframe>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ProjectInfo;
