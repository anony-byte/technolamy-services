import styles from "./ExploreOption.module.scss";
import {motion} from "framer-motion";

const ExploreOption = props => {
    const animation = {
        initial: {x: -50, opacity: 0},
        animate: {x: 0, opacity: 1},
        exit: {x: 50, opacity: 0},
        transition: {delay: 5}
    }
    return <motion.div className={styles.main}
        variants={animation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
    >
            {props.name}
        </motion.div>
}

export default ExploreOption;