import React, { useState } from 'react'
import ServiceHeader from './ServiceHeader';
import styles from "./ServicesHeader.module.scss";

const services = [
    {
        'name': 'website',
        'order': 1,
        'color': 'rgb(30, 30, 30)',
        'styles': {
            'width': '8vw',
            'height': '80%',
            'top': "20%",
            'left': 0,
            'zIndex': 12
        },
        'inside': <div>hello</div>
    }, {
        'name': 'oil paintings',
        'color': 'rgb(50, 50, 50)',
        'styles': {
            'width': '7vw',
            'height': '70%',
            'top': "0%",
            'zIndex': 11
        },
        'inside': <div>hello</div>
    }, {
        'name': 'tattoos',
        'color': 'rgb(70, 70, 70)',
        'styles': {
            'width': '10vw',
            'height': '90%',
            'top': "0%",
            'left': "0vw",
            'zIndex': 10
        },
        'inside': <div>hello</div>
    }
]

export default function ServicesHeader() {

    const [activeTarget, setActiveTarget] = useState(0);

    const setActiveTargetHandler = target => {
        setActiveTarget(target);
    }

    return (
        <div className={styles.main}>
            <div className={styles.name}>technolamy</div>
            <div className={styles.container}>
                {services.map(curr =>
                    <ServiceHeader key={curr.name} setActiveTargetHandler={setActiveTargetHandler} name={curr.name} activeTarget={activeTarget} color={curr.color} styles={curr.styles} inside={curr.inside}/>
                )}
            </div>
        </div>
    )
}
