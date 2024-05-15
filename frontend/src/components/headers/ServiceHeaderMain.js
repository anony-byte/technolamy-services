import React from "react";
import { motion } from "framer-motion";
import styles from "./ServiceHeader.module.scss";

const ServiceHeaderMain = (props) => {
  return (
    <motion.div
      className={styles.main}
      onClick={() => props.widthHandler}
      style={{
        width: "100vw",
        backgroundImage: props.color,
        height: props.styles.height,
      }}
      initial={{ width: "5vw", left: "85vw" }}
      animate={{ width: "85vw", maxWidth: "85vw", left: 0 }}
      transition={{ duration: 1, type: "spring" }}
    >
      {props.inside}
    </motion.div>
  );
};

export default ServiceHeaderMain;
