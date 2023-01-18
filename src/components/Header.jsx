import React from "react";
import styles from "./Header.module.css";
import { FaSun, FaMoon } from "react-icons/fa";
import ThemeContext from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { darkMode, toggleDarkMode } = React.useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 onClick={() => navigate(0)}>Where in the world?</h1>
        <button className={styles.button} onClick={() => toggleDarkMode()}>
          {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
          <span className={styles.themeText}>
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </button>
      </div>
    </header>
  );
};

export default React.memo(Header);
