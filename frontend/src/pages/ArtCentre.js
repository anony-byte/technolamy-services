import {motion} from "framer-motion";
import React from 'react';
import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import AppointmentButton from "../components/AppointmentButton";
import styles from "./ArtCentre.module.scss";

const services = [
  {
    "id": 0,
    "name": "tatoo works",
    "image": "https://pbs.twimg.com/media/CjZs3WSWgAAb6O0.jpg",
    "description": "At Technolamy, we specialize in transforming your visions into remarkable inked masterpieces. Our skilled artists are here to make your tattoo dreams a reality, ensuring that each design tells a unique and compelling story.",
    "height": 90
  },{
    "id": 1,
    "name": "stickering for vehicles",
    "image": "https://wallpapercave.com/wp/wp4316527.jpg",
    "description": "",
    "height": 40
  },{
    "id": 2,
    "name": "wrapping",
    // "image": "https://www.familyhandyman.com/wp-content/uploads/2023/02/GettyImages-1322207311.jpg",
    "image": "https://www.wrapstyle.com/img/home/slide_3_v4.jpg",
    "description": "",
    "height": 70
  },{
    "id": 3,
    "name": "glass filming",
    "image": "https://i.pinimg.com/originals/6d/5d/84/6d5d84a7499aff0211d08afbcda225c0.jpg",
    "description": "",
    "height": 80
  }
]

const ArtCentre = () => {
  return (
    <div className={styles.main}>
      <AppointmentButton for="art-centre" name="book an appointment"/>
      <div className={styles.services}>
        {services.map(curr=> <Link to={curr.name} key={curr.name}><motion.div className={styles.service}
        style={{
          maxHeight: `${curr.height}%`, 
          height: `${curr.height}%`, 
          position: "relative",
          top: `${(100 - curr.height)/2}%`
        }}>
          <motion.img src={curr.image} alt={curr.name}/>
          <motion.div>{curr.name}</motion.div>
        </motion.div></Link>)}
      </div>
      <Outlet/>
    </div>
  )
}

export default ArtCentre