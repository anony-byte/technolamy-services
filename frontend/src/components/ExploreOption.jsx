import styles from "./ExploreOption.module.scss";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component"

const ExploreOption = props => {
    return <Link to={`/${props.name.replace(" ", "-")}`}><motion.div className={styles.main}
        style={props.style}
        variants={props.animation}
    >
        <LazyLoadImage src={props.exploreImage} loading="lazy"/>
        <div>{props.name}</div>
        </motion.div>
        </Link>
}

export default ExploreOption;