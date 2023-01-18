import React from "react";
import Header from "../components/Header";
import Details from "../components/Details";

const Country = ({ url, country }) => {
  return (
    <>
      <Header />
      <Details url={url} country={country} />
    </>
  );
};

export default Country;
