import styles from "./ServiceHeader.module.scss";
import { motion, } from "framer-motion";
import ServiceHeaderMain from './ServiceHeaderMain';
import { useNavigate } from "react-router";

const ServiceHeader = props => {

  const navigator = useNavigate();
  const widthHandler = () => {
    props.setActiveTargetHandler(props.name);
    navigator(`${props.name.replace(" ", "-")}`);
  }

  return (
    <>
      {props.activeTarget !== props.name && <motion.div className={styles.main} onClick={widthHandler}
        initial={{ width: "100vw" }}
        animate={{ width: props.styles.width }}
        transition={{ duration: .3 }}
        key="small"
        style={{
          backgroundImage: props.color,
          height: props.styles.height,
          top: props.styles.top,
          left: props.styles.left,
          zIndex: props.activeTarget === props.name ? 1 : props.styles.zIndex
        }}
      >
      </motion.div>}
      {props.activeTarget === props.name &&
        <ServiceHeaderMain key="big" widthHandler={widthHandler} color={props.color} styles={props.styles} inside={props.inside} />
      }
    </>
  )
}

export default ServiceHeader