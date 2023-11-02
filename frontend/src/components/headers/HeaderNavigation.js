import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./HeaderNavigation.module.scss";

const HeaderNavigation = () => {
  return <div className={styles.main}>
      <NavLink className={status => status.isActive ? styles.active: ""} to="/" state="0">home</NavLink>
      <NavLink className={status => status.isActive ? styles.active: ""} to="/web-services" state="web services">web<br/> services</NavLink>
      <NavLink className={status => status.isActive ? styles.active: ""} to="/oil-paintings" state="oil paintings">oil<br/> paintings</NavLink>
      <NavLink className={status => status.isActive ? styles.active: ""} to="/art-centre" state="art centre">art<br/>centre</NavLink> 
    </div>
}

export default HeaderNavigation
