import React from "react";
import styles from "./Cards.module.css";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Cards = ({ selection, searchInput, setCountry }) => {
  const { request, data, error, loading } = useFetch();

  React.useEffect(() => {
    let ignore = false;
    request("https://restcountries.com/v3.1/all");
    return () => {
      ignore = true;
    };
  }, []);

  const countries = React.useMemo(() => {
    if (selection !== "") {
      return data.filter((data) => data.region === selection);
    } else if (searchInput.length > 1) {
      return data.filter((data) =>
        data.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );
    } else {
      return data;
    }
  }, [data, selection, searchInput]);

  if (error) return <p className={styles.error}>{error}</p>;

  if (loading)
    return (
      <div className={styles.loadingBox}>
        <div className={styles.loading}></div>
      </div>
    );

  return (
    <section className={styles.cards}>
      {countries
        .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
        .map((data) => (
          <Link
            to={`country/${data.name.common.toLowerCase().replace(/\s/g, "-")}`}
            className={styles.card + " fadeInLeft"}
            key={data.cca3}
            onClick={() => setCountry(data)}
          >
            <div className={styles.flag}>
              <img
                src={data.flags.png}
                alt={data.name.common}
                draggable="false"
              />
            </div>

            <h4 key={data.cca2}>
              <b>{data.name.common}</b>
            </h4>
            <span>
              <b className="semiBold">Population:</b>{" "}
              {data.population.toLocaleString()}
            </span>
            <span>
              <b className="semiBold">Region:</b> {data.region}
            </span>
            <span>
              <b className="semiBold">Capital:</b> {data.capital || "—"}
            </span>
          </Link>
        ))}
    </section>
  );
};

export default Cards;
