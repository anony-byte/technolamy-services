import styles from "./ExploreOption.module.scss";
import {motion} from "framer-motion";

const ExploreOption = props => {
    return <motion.div className={styles.main}
        style={props.style}
        variants={props.animation}
    >
        <img src={props.image}/>
            {/* {props.name} */}
        </motion.div>
}

export default ExploreOption;