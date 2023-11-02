import { useParams } from "react-router";
import styles from "./Gallery.module.scss";
import {motion} from "framer-motion";

const Gallery = () => {
    const params = useParams();
    const id = params.id.replace("%20", " ");

    return <motion.div
    initial={{opacity: 0, y: 1000}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: .5}}
    className={styles.main}>
        <div className={styles.header}>
            <div>{id}</div>
        </div>
        <div className={styles.gallery}>
            
        </div>
    </motion.div>
}

export default Gallery;
