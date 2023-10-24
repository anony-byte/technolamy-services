import React from 'react'
import { motion } from 'framer-motion';
import styles from "./ServiceHeader.module.scss";


const ServiceHeaderMain = props => {
  console.log(props)
  return (
    <motion.div className={styles.main} onClick={() => props.widthHandler}
      style={{
        width: "100vw",
        backgroundColor: props.color,
        position: 'relative',
        height: props.styles.height,
        top: props.styles.top,
        zIndex: 1
      }}
      initial={{width: "5vw", left: "85vw"}}
      animate={{width: "100vw", left: 0}}
      transition={{duration: 1, type: "spring"}}
      >
        {props.inside}
      </motion.div>
  )
}

export default ServiceHeaderMain