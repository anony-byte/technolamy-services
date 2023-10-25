import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import ArtCentreHeader from './designs/ArtCentreHeader';
import OilPaintings from './designs/OilPaintings';
import WebDesign from './designs/WebDesign';
import ServiceHeader from './ServiceHeader';
import styles from "./ServicesHeader.module.scss";


//540 - 600
//610 - 660
//670-740

const services = [
    {
        'name': 'web services',
        'order': 1,
        'color': 'linear-gradient(to bottom, transparent 40%, rgb(30, 30, 30) 40%)',
        // 'color': "linear-gradient(yellow, red)",
        'styles': {
            'width': '8vw',
            'height': '100%',
            'top': "0%",
            'left': "0",
            'zIndex': 12,
            'pointerColor': 'rgb(15, 15, 15)',
            'mouseStarting': 540,
            'mouseEnding': 70,
            'leftValue': 540.2578125,
            'textLeft': "50%",
            'textColor': "#bfbfbf"
        },
        'inside': <WebDesign/>
    }, {
        'name': 'oil paintings',
        'color': 'linear-gradient(to bottom, rgb(50, 50, 50) 90%, transparent 90%)',
        'styles': {
            'width': '15vw',
            'height': '100%',
            'top': "0%",
            'zIndex': 11,
            'pointerColor': 'rgb(65, 65, 65)',
            'mouseStarting': 610,
            'mouseEnding': 150,
            'leftValue': 610.015625,
            'textLeft': "40%",
            'textColor': "gray"
        },
        'inside': <OilPaintings/>
    }, {
        'name': 'Art Centre',
        'color': 'linear-gradient(to top, transparent 40%, rgb(70, 70, 70) 40%)',
        'styles': {
            'width': '5vw',
            'height': '100%',
            'top': "0%",
            'left': "0vw",
            'zIndex': 10,
            'pointerColor': 'rgb(85, 85, 85)',
            'mouseStarting': 670,
            'mouseEnding': 100,
            'leftValue': 672.3046875,
            'textLeft': "10%",
            'textColor': "#f2f2f2"
        },
        'inside': <ArtCentreHeader/>
    }
]

export default function ServicesHeader() {

    const [activeTarget, setActiveTarget] = useState(0);

    const variants = {
        'initial': {x: 1000},
        'final': {x: 0, transition: {duration: .8, type: "spring"}},
        'exit': {x: -5000, transition: {duration: 1}}
    }

    const setActiveTargetHandler = target => {
        setActiveTarget(target);
    }

    return (
        <div className={styles.main}>
            <AnimatePresence>
                {activeTarget == 0 && <motion.div variants={variants} key="technlamu"
                initial="initial" animate="final" exit="exit" style={{left: "50%"}}
                className={styles.name}>technolamy?</motion.div>}
                {services.map(curr =>
                    activeTarget === curr.name && <motion.div variants={variants}
                    initial="initial" animate="final" exit="exit"
                    key={curr.name} className={styles.name}
                    style={{left: curr.styles.textLeft, color: curr.styles.textColor}}>
                        {curr.name}
                    </motion.div>
                )}
            </AnimatePresence>
            {/* <div className={styles.content}>
            Greetings, and a warm welcome to TECHNOLAMY, your destination for infusing innovation into your enterprises and discovering the right solutions to meet your requirements.
            </div> */}
            <div className={styles.container}>
                {services.map(curr =>
                    <ServiceHeader key={curr.name} setActiveTargetHandler={setActiveTargetHandler} name={curr.name} activeTarget={activeTarget} color={curr.color} styles={curr.styles} inside={curr.inside} />
                )}
            </div>
        </div>
    )
}
