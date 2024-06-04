import AppointmentButton from "../components/AppointmentButton";
import styles from "./OilPaintings.module.scss";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ImageImport from "../globals/ImageImport";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PageRedirectedButton from "../globals/PageRedirectedButton";

const OilPaintings = () => {
  const filenames = ImageImport("Images");
  const galleryRefs = useRef([]);
  const [imageSelected, setImageSelected] = useState(1);

  const imagesList = filenames.map((curr, index) => (
    <img
      key={curr}
      loading="lazy"
      onClick={() => galleryMovementHandler(index)}
      ref={(el) => (galleryRefs.current[index] = el)}
      src={curr}
      alt="some random name"
    />
  ));
  const imageDescriptionList = [
    {
      id: 6,
      description:
        "The Mona Lisa, painted by Leonardo da Vinci, is an iconic Renaissance portrait of Lisa Gherardini, known for her enigmatic smile, and is housed in the Louvre Museum in Paris.",
    },
  ];

  const galleryMovementHandler = (index) => {
    galleryRefs.current[index].scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
    setImageSelected(index + 1);
  };

  return (
    <div className={styles.main}>
      <AppointmentButton for="oil-paintings" name="contact for painting" />
      <div className={styles.popular}>
        <motion.div className={styles.gallery}>
          <motion.div>{imagesList}</motion.div>
        </motion.div>

        <motion.div className={styles.details} key={imageSelected}>
          <motion.div
            className={styles.image}
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <LazyLoadImage loading="lazy" src={filenames[imageSelected - 1]} />
          </motion.div>

          <motion.div
            className={styles.description}
            key={imageSelected}
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {imageDescriptionList[0].description}
            <motion.div className={styles.buttons}>
              <button>book now</button>
              <button>more details</button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.more}>
        <PageRedirectedButton name="More paintings" to="gallery"/>
      </div>
      <Outlet />
    </div>
  );
};

export default OilPaintings;
