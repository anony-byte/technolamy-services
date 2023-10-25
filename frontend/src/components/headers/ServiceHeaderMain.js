import React from 'react'
import { motion } from 'framer-motion';
import styles from "./ServiceHeader.module.scss";


const ServiceHeaderMain = props => {
  console.log(props)
  return (
    <motion.div className={styles.main} 
    onClick={() => props.widthHandler}
      style={{
        // position: 'absolute', these three can be uncommented for all the small bars to stay on the same side
        // top: '0',
        // left: '0',
        width: "100vw",
        backgroundImage: props.color,
        height: props.styles.height,
        // top: props.styles.top,
        zIndex: 1
      }}
      initial={{width: "5vw", left: "85vw"}}
      animate={{width: "85vw", maxWidth: "85vw", left: 0}}
      transition={{duration: 1, type: "spring"}}
      >
        {props.inside}
      </motion.div>
  )
}

export default ServiceHeaderMain