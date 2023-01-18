import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Cards from "../components/Cards";

const Main = ({ setCountry }) => {
  const [searchInput, setSearchInput] = React.useState("");
  const [selection, setSelection] = React.useState("");

  return (
    <>
      <Header />
      <Menu
        selection={selection}
        setSelection={setSelection}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Cards
        selection={selection}
        searchInput={searchInput}
        setCountry={setCountry}
      />
    </>
  );
};

export default Main;
