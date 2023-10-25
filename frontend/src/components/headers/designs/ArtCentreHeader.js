import React, { useState } from 'react'
import styles from "./ArtCentre.module.scss";
import {motion} from "framer-motion";


const services = [
  {
    "name": "tattoo studio",
    "image": "https://wallpapers.com/images/hd/skeleton-girl-hd-tattoo-f5g3sntxok2nminz.jpg",
    "textColor": "white",
    "description": "At Technolamy, we specialize in transforming your visions into remarkable inked masterpieces. Our skilled artists are here to make your tattoo dreams a reality, ensuring that each design tells a unique and compelling story."
    // "image": "https://c4.wallpaperflare.com/wallpaper/254/1023/794/models-model-brunette-girl-wallpaper-preview.jpg"

  },{
    "name": "wrapping works",
    "image": "https://yeahmotor.com/wp-content/uploads/2019/05/carwrap13.jpg",
    "textColor": "white",
    "description": "Upgrade your vehicle's look with Technolamy Wraps. We're experts at turning cars, motorcycles, and more into stunning works of art. Explore our options and see your ride transform from the ordinary to the extraordinary."
  },{
    "name": "stickering",
    // "image": "https://i.pinimg.com/originals/60/11/c6/6011c6359e706ba88cf2e83829fb87c5.jpg",
    "image": "https://c4.wallpaperflare.com/wallpaper/256/284/998/apple-style-wallpaper-preview.jpg",
    "textColor": "white",
    "description": "Elevate your ride with Technolamy. We specialize in bike stickers and custom number plate designs that add a touch of uniqueness to your motorcycle. Explore our creative solutions and make your bike stand out on the road"
  }
];


const ArtCentreHeader = () => {

  const [serviceIndex, setServiceIndex] = useState(0);

  const goToPrevHandler = () => {
    setServiceIndex(prev => (services.length + (prev - 1))%services.length)
  }

  const goToNextHandler = () => {
    setServiceIndex(prev => (prev + 1)%services.length);
  }

  return (
    <div className={styles.main}>
      <div className={styles.gallery}>
          <div className={styles.images} style={{transform: `translateX(-${+100* serviceIndex}%)`}}>
            {services.map(curr => <img src={curr.image} alt={curr.name}/>)}
          </div>
      </div>
      <motion.div className={styles.header}
      style={{color: services[serviceIndex].textColor}}
      key={serviceIndex}
      initial={{x: -500, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 1}}
      >
        {services[serviceIndex].name}
      </motion.div>
        <div className={styles.buttons}>
          <button onClick={goToPrevHandler}>prev</button>
          <button onClick={goToNextHandler}>next</button>
      </div>
      <motion.div key={`desc_${serviceIndex}`}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 1, duration: 1}}
      className={styles.desc}>
        {services[serviceIndex].description}
      </motion.div>
    </div>
  )
}

export default ArtCentreHeader;
