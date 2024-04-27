import ExploreOption from "../components/ExploreOption";
import styles from "./ExplorePage.module.scss";
import {motion} from "framer-motion";

const services = ["Art Centre"];

const ExplorePage = () => {
    return <motion.div className={styles.main}>
        {services.map(service => <ExploreOption key={service} name={service}/>)}
    </motion.div>
}

export default ExplorePage;