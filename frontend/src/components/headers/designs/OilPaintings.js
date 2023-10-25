import React from 'react'
import styles from './OilPaintings.module.scss';
import {motion} from "framer-motion"

const OilPaintings = () => {
  const variants = {
    'initial': {x: 0},
    'final': {translate: "-50%", transition: {duration: 30, repeat: Infinity, ease: "linear", delay: 1}}
  }
  return <div className={styles.main}>
    <motion.div className={styles.content}
    initial={{opacity: 0, scale: 1.1}}
    animate={{opacity: 1, scale: 1}}
    transition={{delay: 1.5, duration: 1}}
    >
        {/* Welcome to our world of timeless artistry and expression, where every brushstroke tells a story. At [Your Website Name], we invite you to explore the enchanting realm of oil paintings. Our curated collection showcases the beauty and emotion of oil on canvas, offering a window into the past, present, and future of artistic creation. Immerse yourself in the rich textures, vivid colors, and evocative imagery that grace our canvases. Whether you're a seasoned art connoisseur or a first-time collector, we're here to help you discover and acquire the perfect oil painting to adorn your space and inspire your soul. */}
        Explore our curated collection of oil paintings at <span>technolamy </span>, where art comes to life and transforms your space into a realm of vivid expression and emotion
    </motion.div>
    <motion.div className={styles.gallery}
    >
        <motion.div variants={variants} initial="initial" animate="final">
            <img src='https://w0.peakpx.com/wallpaper/218/841/HD-wallpaper-oil-painting-artwork-men-portrait-classical-art.jpg'/>
            <img src="https://wallpapers.com/images/featured/famous-painting-hfni7fg4bqoiv3ae.jpg"/>
            <img src="https://c4.wallpaperflare.com/wallpaper/783/16/970/famous-paintings-s-hd-famous-paintings-s-hd-wallpaper-preview.jpg"/>
            <img src="https://media.newyorker.com/photos/5968e0f3b39b406ba7f0078d/master/w_2560%2Cc_limit/Bentley-Charlotte-Salomon_01.jpg"/>
            <img src="https://i.pinimg.com/1200x/16/d9/de/16d9debacf2f56c525d9f38dc7aa0fe0.jpg"/>
            <img src="https://c1.wallpaperflare.com/preview/1002/655/719/kids-black-and-white-photography-child.jpg"/>

            <img src='https://w0.peakpx.com/wallpaper/218/841/HD-wallpaper-oil-painting-artwork-men-portrait-classical-art.jpg'/>
            <img src="https://wallpapers.com/images/featured/famous-painting-hfni7fg4bqoiv3ae.jpg"/>
            <img src="https://c4.wallpaperflare.com/wallpaper/783/16/970/famous-paintings-s-hd-famous-paintings-s-hd-wallpaper-preview.jpg"/>
            <img src="https://media.newyorker.com/photos/5968e0f3b39b406ba7f0078d/master/w_2560%2Cc_limit/Bentley-Charlotte-Salomon_01.jpg"/>
            <img src="https://c4.wallpaperflare.com/wallpaper/783/16/970/famous-paintings-s-hd-famous-paintings-s-hd-wallpaper-preview.jpg"/>
            <img src="https://c1.wallpaperflare.com/preview/1002/655/719/kids-black-and-white-photography-child.jpg"/>
        </motion.div>
    </motion.div>
  </div>
}

export default OilPaintings