import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Explore.module.scss";

const Explore = () => {
    const nav = useNavigate();
    const toggleActiveExplore = () => {
        nav("/explore");
    }

    return <>
            <div><Outlet/></div>
            <div onClick={toggleActiveExplore} className={styles.o}>o</div>
           </>
}

export default Explore;
