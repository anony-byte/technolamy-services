import ExploreOption from "../components/ExploreOption";
import styles from "./ExplorePage.module.scss";
import {motion} from "framer-motion";
import ImportImages from "../globals/ImageImport";

const exploreImages = ImportImages("ExploreImages");

const services = [{
    name: "web sites",
    style: {top: '10%', left: '15%', flexDirection: 'row-reverse'},
    exploreImage: exploreImages[1],
    animation: {
        initial: {x: -100, opacity: 0},
        animate: {x: 0, opacity: 1},
        exit: {x: 50, opacity: 0}
    }
},{
    name: "art centre",
    style: {top: '20%', left: '50%', height: '55vh', width: '40vw', alignItems: 'flex-start'},
    exploreImage: exploreImages[2],
    animation: {
        initial: {x: 100, opacity: 0},
        animate: {x: 0, opacity: 1},
        exit: {x: 50, opacity: 0}
    }
},{
    name: "oil paintings",
    style: {top: '55%', left: '5%'},
    exploreImage: exploreImages[0],
    animation: {
        initial: {x: -100, opacity: 0},
        animate: {x: 0, opacity: 1},
        exit: {x: 50, opacity: 0}
    }
}]

const ExplorePage = () => {
    const animation = {
        initial: {scale: 0},
        animate: {scale: 1, transition: {delayChildren: .5, staggerChildren: .5}},
        exit: {scale: 0, opacity: 0}
    }
    return <motion.div className={styles.main}>
        {/* <BackButton top="70%" left="90%" /> */}
        <motion.div
        variants={animation} 
        initial="initial" 
        animate="animate" 
        exit="exit">
            {services.map(service => <ExploreOption exploreImage={service.exploreImage} animation={service.animation} style={service.style} key={service.name} name={service.name}/>)}
        </motion.div>
    </motion.div>
}

export default ExplorePage;