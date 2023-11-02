import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../headers/Header'
import styles from "./Home.module.scss";

const Home = () => {

  const location = useLocation();

  return <div className={styles.main}>
      <div><Header headerRender={location.state}/></div>
      <div className={styles.container}><Outlet/></div>
    </div>
}

export default Home
