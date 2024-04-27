import styles from "./Carousal.module.scss";
import { useState } from "react";
import {motion} from "framer-motion";

const Carousal = ({imagesList}) => {
    const [activatedImage, setActivatedImage] = useState(1);
    const activateImageHandler = index => setActivatedImage(index);

    return <div className={styles.main}
    style={{
        transform: `translateX(${(1 - activatedImage)*20}%)`
    }}>
        {imagesList.map((image, index) => <div 
        onClick={() => activateImageHandler(index)} key={image}
        style={{
            minWidth: activatedImage === index ? "60%": "20%",
            visibility: Math.abs(activatedImage - index) < 2? "visible": "hidden",
            opacity: Math.abs(activatedImage - index) < 2? 1: 0
        }}>
            <img src={image} style={{
                minWidth: "90%",
                filter: `grayscale(${activatedImage === index? 50: 100}%)`,
                transform: activatedImage === index? "none": `perspective(400px) rotateY(${index > activatedImage ? 45: -45}deg) scale(0.7)`
            }}/>
        </div>)}
    </div>
}
export default Carousal;
