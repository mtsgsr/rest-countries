import React from "react";
import Header from "../components/Header";
import Details from "../components/Details";

const Country = ({ country, setCountry }) => {
  return (
    <>
      <Header />
      <Details country={country} setCountry={setCountry} />
    </>
  );
};

export default Country;
