import React from "react";
import styles from "../styles/Projects.module.scss";
import { Fjalla_One, Abel, Noto_Sans_JP } from "@next/font/google";
import Image from "next/image";

import projects from "../public/data/data";
import Link from "next/link";

const fjalla = Fjalla_One({
  subsets: ["latin"],
  weight: ["400"],
});

const abel = Abel({
  subsets: ["latin"],
  weight: ["400"],
});

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400"],
});

function Projects(props) {
  return (
    <div className={styles.projectsContainer} id="projects">
      {projects.map((project, i) => {
        let projectNumber = (projects.length - i).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });
        return (
          <div className={styles.projectContainer} key={"project: " + i}>
            <Link href={project.route} passHref={true}>
              <section className={styles.projectInfo}>
                <span
                  className={`${fjalla.className} ${styles.title}`}
                  data-content={project.title}
                >
                  {project.title}
                </span>
                <div className={`${abel.className} ${styles.headerInfo}`}>
                  <span>{project.infoOne}</span>
                  <span>{project.infoTwo}</span>
                </div>
                <div className={`${abel.className} ${styles.projectNumber}`}>
                  <span className={styles.ptitle}>PROJECT</span>
                  <span className={styles.pnum}>#{projectNumber}</span>
                </div>
                {project.image != "/" ? (
                  <Image
                    src={project.image}
                    width={110}
                    height={64}
                    alt="project thumbnail"
                  ></Image>
                ) : null}
                <summary className={`${styles.projectSummary}`}>
                  {project.desc}
                </summary>
              </section>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
