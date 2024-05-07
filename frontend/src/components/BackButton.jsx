import { useNavigate } from "react-router";
import styles from "./BackButton.module.scss";
import {motion} from "framer-motion";

const BackButton = (props) => {
  const navigator = useNavigate();
  const goBackHandler = () => {
    if (props?.goBackHandler) {
      props.goBackHandler();
      return;
    }
    navigator(-1);
  };
  
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{delay: 0}}
    className={styles.main} style={{top: props.top || "0", left: props.left || "0"}}>
      {props?.type === "close" ? <span onClick={goBackHandler} className="material-symbols-outlined">
        arrow_back
      </span>:
      <span onClick={goBackHandler} className="material-symbols-outlined">
        close
      </span>}
    </motion.div>
  );
};

export default BackButton;
