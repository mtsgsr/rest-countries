import React from "react";
import styles from "./Menu.module.css";
import { FaSearch } from "react-icons/fa";

const Menu = ({ selection, setSelection, searchInput, setSearchInput }) => {
  const handleSearch = ({ target }) => {
    setSearchInput(target.value);
  };

  const handleSelection = ({ target }) => {
    setSelection(target.value);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.search}>
        <FaSearch size={17.5} color="var(--input)" />
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchInput}
          onChange={handleSearch}
        />
      </div>
      <div className={styles.select}>
        <select value={selection} onChange={handleSelection}>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Menu;
