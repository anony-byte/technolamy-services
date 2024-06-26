import React from "react";
import styles from "./OilPaintings.module.scss";
import { motion, useTransform, useScroll } from "framer-motion";
import ImageImport from "../../../globals/ImageImport";
import {canvas} from "../../../globals/Globals";
import { LazyLoadImage } from "react-lazy-load-image-component";

const OilPaintings = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const variants = {
    initial: { x: 0 },
    final: {
      translate: "-50%",
      transition: { duration: 30, repeat: Infinity, ease: "linear", delay: 1 },
    },
  };

  const canvasVariants = {
    initial: {},
    final: {},
  };

  const canvasVariantsInner = {
    initial: {},
    final: {
      x: [-500, 0, 0, 0, 0, 500],
      opacity: [0, 1, 1, 1, 1, 0.5],
      transition: { duration: 3, repeatDelay: 6, repeat: Infinity },
    },
  };

  const imagesList = ImageImport("Images").map((curr) => (
    <LazyLoadImage loading="lazy" src={curr} alt="some random name" key={curr} />
  ));

  return (
    <div className={styles.main}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ y }}
      >
        Explore our curated collection of oil paintings at{" "}
        <span>technolamy </span>, where art comes to life and transforms your
        space into a realm of vivid expression and emotion
      </motion.div>
      <motion.div className={styles.gallery}>
        <motion.div variants={variants} initial="initial" animate="final">
          {imagesList}
          {imagesList}
        </motion.div>
      </motion.div>
      <motion.div className={styles.extra}>
        <motion.div
          className={styles.inner}
          variants={canvasVariants}
          initial="initial"
          animate="final"
          transition={{
            staggerChildren: 3,
          }}
        >
          {canvas.map(canvas => <motion.div variants={canvasVariantsInner}>
            {canvas.name}
          </motion.div>)}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OilPaintings;
