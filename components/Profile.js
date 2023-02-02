import React from "react";
import styles from "../styles/Profile.module.scss";

import Image from "next/image";
import banner from "../public/images/plant.gif";
import profilePicture from "../public/images/not.jpg";
import { Noto_Serif_SC } from "@next/font/google";
import { FaLinkedin, FaGithub, FaRegEnvelope } from "react-icons/fa";

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["700"],
});

function Profile(props) {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileDimensions}>
        <Image src={banner} alt="Green Gif" objectFit="contain" />
        <div className={styles.profileBody}>
          <div className={styles.profileCircleContainer}>
            <Image
              src={profilePicture}
              alt="William Zhou Profile Picture"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className={styles.contentBody}>
            <p className={notoSerifSC.className}>William Zhou // 周夏柱</p>
            <span>Software Developer</span>
          </div>
        </div>
        <div className={styles.socialMediaContainer}>
          <div className={styles.socialMedia}>
            <a
              className={styles.icon}
              href="https://www.linkedin.com/in/wxzdev/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              className={styles.icon}
              href="https://github.com/zhouxzw"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={22} />
            </a>

            <a className={styles.icon} href="mailto:ucwill.zhou@gmail.com">
              <FaRegEnvelope className={styles.icon} size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
