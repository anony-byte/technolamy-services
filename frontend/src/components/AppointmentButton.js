import styles from "./AppointmentButton.module.scss";
import React from 'react'
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const AppointmentButton = props => {
  return <motion.div className={styles.main}
  >
    <Link to="booking">{props.name || "book an appointment"}</Link>
  </motion.div>
}

export default AppointmentButton;