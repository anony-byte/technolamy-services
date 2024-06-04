import { useNavigate } from "react-router";
import styles from "./BackButton.module.scss";
import {motion} from "framer-motion";

const BackButton = (props) => {
  const navigator = useNavigate();
  const goBackHandler = () => {
    navigator(-1);
  };
  
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    className={styles.main}>
      <span onClick={goBackHandler} className="material-symbols-outlined">
        arrow_back
      </span>
    </motion.div>
  );
};

export default BackButton;
