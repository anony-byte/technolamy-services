import React, { useState } from "react";
import styles from "./ArtCentre.module.scss";
import { motion, useTransform, useScroll } from "framer-motion";
import ImageImport from "../../../globals/ImageImport";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { artCentreHeaderServices as services } from "../../../globals/Globals";

const ArtCentreHeader = () => {
  const [serviceIndex, setServiceIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

  const goToPrevHandler = () => {
    setServiceIndex((prev) => (services.length + (prev - 1)) % services.length);
  };

  const goToNextHandler = () => {
    setServiceIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <div className={styles.main}>
      <div className={styles.gallery}>
        <div
          className={styles.images}
          style={{ transform: `translateX(-${+100 * serviceIndex}%)` }}
        >
          {services.map((curr) => (
            <LazyLoadImage
              loading="lazy"
              src={curr.image}
              alt={curr.name}
              key={curr.name}
            />
          ))}
        </div>
      </div>
      <motion.div
        className={styles.header}
        style={{ color: services[serviceIndex].textColor, y }}
        key={serviceIndex}
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {services[serviceIndex].name}
      </motion.div>
      <div className={styles.buttons}>
        <button onClick={goToPrevHandler}>prev</button>
        <button onClick={goToNextHandler}>next</button>
      </div>
      <motion.div
        key={`desc_${serviceIndex}`}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className={styles.desc}
      >
        {services[serviceIndex].description}
      </motion.div>
    </div>
  );
};

export default ArtCentreHeader;
