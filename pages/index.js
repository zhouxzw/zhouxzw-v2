import Head from "next/head";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Intro from "../components/Intro";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

import backgroundImage from "../public/svg/background.svg";
import Projects from "../components/Projects";

export default function Home() {
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
                <Intro></Intro>
                <Projects></Projects>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
