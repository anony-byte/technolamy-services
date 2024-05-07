import ExploreOption from "../components/ExploreOption";
import styles from "./ExplorePage.module.scss";
import {motion} from "framer-motion";

const services = [{
    name: "Web Sites",
    style: {top: '10%', left: '15%'},
    image: "https://bubble.io/blog/content/images/size/w600/2023/07/business-website-design.png",
    animation: {
        initial: {x: -100, opacity: 0},
        animate: {x: 0, opacity: 1},
        exit: {x: 50, opacity: 0}
    }
},{
    name: "Art Centre",
    style: {top: '20%', left: '50%', height: '55vh', width: '40vw'},
    image: require("../resources/artcentreimages/wrapping.jpeg"),
    animation: {
        initial: {x: 100, opacity: 0},
        animate: {x: 0, opacity: 1},
        exit: {x: 50, opacity: 0}
    }
},{
    name: "Oil Paintings",
    style: {top: '55%', left: '5%', backgroundColor: 'white'},
    image: require("../resources/images/Van-Gogh-Self-Portrait.jpg"),
    animation: {
        initial: {x: -100, opacity: 0},
        animate: {x: 0, opacity: 1},
        exit: {x: 50, opacity: 0}
    }
}]

const ExplorePage = () => {
    const animation = {
        initial: {scale: 0},
        animate: {scale: 1, transition: {duration: 1, delayChildren: 1, staggerChildren: .5}},
        exit: {scale: 0, opacity: 0}
    }
    return <motion.div className={styles.main}>
        {/* <BackButton top="70%" left="90%" /> */}
        <motion.div
        variants={animation} 
        initial="initial" 
        animate="animate" 
        exit="exit">
            {services.map(service => <ExploreOption image={service.image} animation={service.animation} style={service.style} key={service.name} name={service.name}/>)}
        </motion.div>
    </motion.div>
}

export default ExplorePage;