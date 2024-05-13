import styles from "./ServiceHeader.module.scss";
import { motion, } from "framer-motion";
import ServiceHeaderMain from './ServiceHeaderMain';
import { useRef, useState } from "react";
import { useNavigate } from "react-router";

const ServiceHeader = props => {

  const navigator = useNavigate();
  console.log();

  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const containerRef = useRef();

  const mouseMovementHandler = event => {
    const { left, top } = containerRef.current.getBoundingClientRect();
    setPointer(prev => {
      return {
        x: event.pageX - left,
        y: event.pageY - top
      }
    })

  }

  const widthHandler = () => {
    props.setActiveTargetHandler(props.name);
    navigator(`${props.name.replace(" ", "-")}`);
  }

  return (
    <>
      {props.activeTarget !== props.name && <motion.div className={styles.main} onClick={widthHandler}
        onMouseMove={e => mouseMovementHandler(e)}
        initial={{ width: "100vw" }}
        animate={{ width: props.styles.width }}
        transition={{ duration: .3 }}
        ref={containerRef}
        key="small"
        style={{
          cursor: "pointer", //this is curspr customization
          backgroundImage: props.color,
          height: props.styles.height,
          position: 'relative',
          top: props.styles.top,
          left: props.styles.left,
          zIndex: props.activeTarget === props.name ? 1 : props.styles.zIndex
        }}
      >
        {/* <motion.div this is curspr customization

          animate={{ x: pointer.x, y: pointer.y }}
          style={{
            cursor: "none",
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            backgroundColor: props.styles.pointerColor,
            visibility: pointer.x > 10 && pointer.x < props.styles.mouseEnding ? "visible" : "hidden"
          }}>

        </motion.div> */}

      </motion.div>}
      {props.activeTarget === props.name &&
        <ServiceHeaderMain key="big" widthHandler={widthHandler} color={props.color} styles={props.styles} inside={props.inside} />
      }
    </>
  )
}

export default ServiceHeader