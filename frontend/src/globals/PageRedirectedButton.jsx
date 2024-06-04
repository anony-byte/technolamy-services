import { Link } from "react-router-dom";
import styles from "./PageRedirectedButton.module.scss";

const PageRedirectedButton = props => {
    return <div className={styles.pagebutton}><Link to={props.to}>
    {props.name}
    <span className="material-symbols-outlined">
          keyboard_double_arrow_up
    </span>
  </Link>
  </div>
}

export default PageRedirectedButton;