import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Explore.module.scss";

const Explore = () => {
    const nav = useNavigate();
    const [explorerFullPage, setExplorerFullPage] = useState(false);
    const toggleActiveExplore = () => {
        setExplorerFullPage(prev => !prev);
        if(!explorerFullPage) nav("/explore");
    }

    return <>
            <div><Outlet/></div>
            <div onClick={toggleActiveExplore} style={explorerFullPage? {transform: 'rotate(20deg)', scale: '1.5'}: {}} className={styles.o}>o</div>
           </>
}

export default Explore;
