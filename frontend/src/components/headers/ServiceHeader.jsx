import styles from "./ServiceHeader.module.scss";
import {motion, useScroll} from "framer-motion";
import ServiceHeaderMain from './ServiceHeaderMain';

const ServiceHeader = props => {


  const widthHandler = () => {
    props.setActiveTargetHandler(props.name);
  }

  return (
    <>
      {props.activeTarget !== props.name && <motion.div className={styles.main} onClick={widthHandler}
      initial={{width: "100vw"}}
      animate={{width: props.styles.width}}
      transition={{duration: .8}}
      style={{
        backgroundColor: props.color,
        height: props.styles.height,
        position: 'relative',
        top: props.styles.top,
        left: props.styles.left,
        zIndex: props.activeTarget === props.name ? 1: props.styles.zIndex
      }}
      >

      </motion.div>}
      {props.activeTarget === props.name && 
      <ServiceHeaderMain widthHandler={widthHandler} color={props.color} styles={props.styles} inside={props.inside}/>}
    </>
  )
}

export default ServiceHeader