import { useState } from "react";
import Explore from "../components/extras/Explore";
import styles from "./Home.module.scss";

const HomePage = () => {
  const explore = [<Explore/>, "e", "x", "p", "l", "r", "e", ".", ".", "."];

  return <div className={styles.main}>
    <div className={styles.explore}>
      {explore.map(a => <div key={Math.random() * 100} className={styles.alpha}>{a}</div>)}
    </div>
    <div className={styles.circle2}>
    </div>
  </div>;
};

export default HomePage;
