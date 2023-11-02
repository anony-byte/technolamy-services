import AppointmentButton from "../components/AppointmentButton";
import styles from "./OilPaintings.module.scss";
import {motion} from "framer-motion";
import { useRef, useState } from "react";
import {Link, Outlet} from "react-router-dom";

const OilPaintings = () => {
  const importAll = r => r.keys().map(r);
  const filenames = importAll(require.context("../resources/images/", false, /\.(png|jpe?g|svg)$/));
  const galleryRefs = useRef([]);
  const [imageSelected, setImageSelected] = useState(1);

  const imagesList = filenames.map((curr, index)=> <img onClick={() => galleryMovementHandler(index)} ref={el => galleryRefs.current[index] = el} src={curr} alt="some random name" key={curr}/>)
  const imageDescriptionList = [{
    'id': 6,
    'description': "The Mona Lisa, painted by Leonardo da Vinci, is an iconic Renaissance portrait of Lisa Gherardini, known for her enigmatic smile, and is housed in the Louvre Museum in Paris."
  }]


  const [galleryX, setGalleryX] = useState("0%");
 

  const galleryMovementHandler = index => {
    galleryRefs.current[index].scrollIntoView({ behavior: "smooth", inline: "start" });
    setImageSelected(index + 1);
  }


  return <div className={styles.main}>
      <AppointmentButton name="contact for painting"/>
      <div className={styles.popular}>
        <motion.div
        className={styles.gallery}>
          <motion.div>
            {imagesList}
          </motion.div>
        </motion.div>
        <motion.div className={styles.details} key={imageSelected}>
          <motion.div className={styles.image}
            initial={{x: -500, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: .5}}>
            <img src={filenames[imageSelected - 1]}/>
          </motion.div>
          <motion.div className={styles.description} key={imageSelected}
          initial={{opacity: 0, x: 500}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: .5, delay: .5}}
          
          >
            {imageDescriptionList[0].description}
            <motion.div className={styles.buttons}>
              <button>book now</button>
              <button>more details</button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Link className={styles.more} to="gallery">
        <button>More paintings &gt; </button>
      </Link>
      <Outlet/>
    </div>
}

export default OilPaintings