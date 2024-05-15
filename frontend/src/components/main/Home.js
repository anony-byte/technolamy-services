import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../headers/Header";
import styles from "./Home.module.scss";
import HomePage from "../../pages/HomePage";

const Home = () => {
  const location = useLocation();

  return (
    <div className={styles.main}>
      <div>
        <Header />
      </div>
      <div className={styles.container}>
        {location.pathname == "/" ||
        location.pathname === "" ||
        location.pathname.includes("explore") ? (
          <HomePage />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Home;
