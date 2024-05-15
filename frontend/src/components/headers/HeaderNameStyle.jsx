import styles from "./ServicesHeader.module.scss";
import { motion } from "framer-motion";

const HeaderNameStyle = (props) => {
    const variants = {
        initial: { x: 1000 },
        final: { x: 0, transition: { duration: 0.8, type: "spring" } },
        exit: { x: -5000, transition: { duration: 1 } },
      };

      return <motion.div variants={variants} key={props.name} initial="initial" animate="final" exit="exit" style={props.style} className={styles.name}>
                {props.name}
             </motion.div>
}

export default HeaderNameStyle;