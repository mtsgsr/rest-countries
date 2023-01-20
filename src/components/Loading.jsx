import React from "react";
import styles from "./Loading.module.css";

const Loading = ({ height }) => {
  return (
    <div className={styles.loadingBox} style={{ height: height }}>
      <div className={styles.loading}></div>
    </div>
  );
};

export default Loading;
