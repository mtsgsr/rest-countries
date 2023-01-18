import React from "react";
import styles from "./Details.module.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Detail = ({ country }) => {
  const navigate = useNavigate();

  const goBack = () => navigate("/");

  return (
    <section className={styles.details + " fadeInLeft"}>
      <div>
        <button onClick={goBack} className={styles.back}>
          <FaArrowLeft />
          back
        </button>
      </div>
      <div className={styles.country}>
        <img
          src={country.flags.png}
          alt={country.name.common}
          className={styles.flag}
        />
        <div className={styles.description}>
          <h1>
            <b>{country.name.common}</b>
          </h1>
          <div className={styles.elements}>
            <div>
              <p>
                <b className="semiBold">Native Name:</b>{" "}
                {(country.name.nativeName &&
                  Object.values(country.name.nativeName)[0].common) ||
                  "—"}
              </p>
              <p>
                <b className="semiBold">Population:</b>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <b className="semiBold">Region:</b> {country.region}
              </p>
              <p>
                <b className="semiBold">Sub Region:</b>{" "}
                {country.subregion || "—"}
              </p>
              <p>
                <b className="semiBold">Capital:</b> {country.capital || "—"}
              </p>
            </div>
            <div>
              <p>
                <b className="semiBold">Top Level Domain:</b> {country.tld}
              </p>
              <p>
                <b className="semiBold">Currencies:</b>{" "}
                {(country.currencies &&
                  Object.values(country.currencies)
                    .map((currency) => currency.name)
                    .join(", ")) ||
                  "—"}
              </p>
              <p>
                <b className="semiBold">Languages:</b>{" "}
                {(country.languages &&
                  Object.values(country.languages).join(", ")) || (
                  <i>No language data available</i>
                )}
              </p>
              <p>
                <b className="semiBold">Int. Dial Code:</b>{" "}
                {Object.values(country.idd).join("")}
              </p>
            </div>
          </div>
          <div className={styles.borders}>
            <p>
              <b className="semiBold">Border Countries:</b>{" "}
            </p>
            {(country.borders &&
              country.borders.map((border) => (
                <button className={styles.borderBtn} key={border}>
                  {border}
                </button>
              ))) ||
              "—"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
