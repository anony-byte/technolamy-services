import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../headers/Header'
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.main}>
      <div><Header/></div>
      <div className={styles.container}><Outlet/></div>
    </div>
  )
}

export default Home
