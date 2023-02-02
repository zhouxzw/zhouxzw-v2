import React from "react";
import projects from "../../public/data/data";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Profile from "../../components/Profile";
import styles from "../../styles/Home.module.scss";

import backgroundImage from "../../public/svg/background.svg";
import ProjectInfo from "../../components/ProjectInfo";

function project(props) {
  const project = props.project[0];

  console.log(project);

  return (
    <div>
      <Head>
        <title>zhouxzw</title>
        <meta name="description" content="zhouxzw portfolio" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta charset="UTF-8"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <Navbar></Navbar>

          <main className={styles.main}>
            <div className={styles.backgroundImageWrapper}>
              <div className={styles.backgroundImageContainer}>
                <Image
                  src={backgroundImage}
                  alt="Background Image"
                  quality={100}
                ></Image>
              </div>
            </div>
            <div className={styles.contentContainer}>
              <div>
                <Profile></Profile>
              </div>
              <div className={styles.mainContent}>
                <ProjectInfo project={project}></ProjectInfo>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export function getStaticProps({ params }) {
  const project = projects.filter((proj) => {
    return proj.routeName === params.projectId;
  });
  return {
    props: {
      project: project,
    },
  };
}

//project paths /projects/[projectId]
export function getStaticPaths() {
  return {
    paths: projects.map((project) => {
      const projectId = project.routeName;
      return {
        params: {
          projectId,
        },
      };
    }),
    fallback: false,
  };
}

export default project;
