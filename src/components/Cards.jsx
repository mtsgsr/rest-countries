import React from "react";
import styles from "./Cards.module.css";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Cards = ({ selection, searchInput, setCountry }) => {
  const { request, data, error, loading } = useFetch();
  const abortController = new AbortController();
  const [countriesVisible, setCountriesVisible] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    request("https://restcountries.com/v3.1/all");
    return () => {
      abortController.abort();
    };
  }, []);

  const countries = React.useMemo(() => {
    if (selection !== "") {
      setCountriesVisible(10);
      return data.filter((data) => data.region === selection);
    } else if (searchInput.length > 1) {
      setCountriesVisible(10);
      return data.filter((data) =>
        data.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );
    } else {
      setCountriesVisible(10);
      return data;
    }
  }, [data, selection, searchInput]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountriesVisible((countries) => countries + 4);
        }
      },
      {
        rootMargin: "0px 0px 50% 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [countries]);

  if (error) return <p className={styles.error}>{error}</p>;

  if (loading) return <Loading />;

  return (
    <main>
      <section className={styles.cards}>
        {countries
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .slice(0, countriesVisible)
          .map((data) => (
            <Link
              to={`country/${data.name.common
                .toLowerCase()
                .replace(/\s/g, "-")}`}
              className={styles.card + " fadeInLeft"}
              key={data.cca3}
              onClick={() => setCountry(data)}
            >
              <div className={styles.flag}>
                <img
                  src={data.flags.png}
                  alt={data.name.common}
                  draggable="false"
                  loading="lazy"
                />
              </div>
              <h2 key={data.cca2}>
                <b>{data.name.common}</b>
              </h2>
              <p>
                <b className="semiBold">Population:</b>{" "}
                {data.population.toLocaleString()}
              </p>
              <p>
                <b className="semiBold">Region:</b> {data.region}
              </p>
              <p>
                <b className="semiBold">Capital:</b> {data.capital || "—"}
              </p>
            </Link>
          ))}
      </section>
      <div ref={ref} />
    </main>
  );
};

export default Cards;
