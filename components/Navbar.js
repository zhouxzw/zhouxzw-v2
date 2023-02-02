import React from "react";
import styles from "../styles/Navbar.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

import { BsList, BsX } from "react-icons/bs";
function Navbar(props) {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const router = useRouter();

  const redirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <nav className={styles.navbar}>
      <header
        className={styles.header}
        onClick={(e) => {
          e.preventDefault();
          toggleDropdown();
          router.push("/");
        }}
      >
        zhouxzw
      </header>

      <div
        className={
          dropdown
            ? `${styles.dropDownMenu} ${styles.dropDownMenuOpen}`
            : `${styles.dropDownMenu}`
        }
      >
        <li
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown();
            router.push("/");
          }}
        >
          <a>about</a>
        </li>
        <li
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown();
            router.push("/#projects");
          }}
        >
          <a>projects</a>
        </li>
        <li
          onClick={() => {
            toggleDropdown();
            redirect("/files/resume.pdf");
          }}
        >
          <a>resume</a>
        </li>
      </div>

      <div className={styles.dropDownButton} onClick={() => toggleDropdown()}>
        {dropdown ? (
          <BsX size="2rem" color="black"></BsX>
        ) : (
          <BsList size="1.8rem" color="black"></BsList>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
