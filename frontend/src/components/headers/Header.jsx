import styles from "./Header.module.scss";
import HomeHeader from "./HomeHeader";
import ServicesHeader from "./ServicesHeader";

const Header = (props) => {
    return <div className={styles.main}>
        {/* <HomeHeader /> */}
        <ServicesHeader headerRender={props?.headerRender} />
    </div >
}

export default Header;