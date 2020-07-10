import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <a rel="noopener noreferrer" href="https://f1rendev.netlify.app/">
        Made by Valentin Maltsev
      </a>
    </div>
  );
};

export default Header;
