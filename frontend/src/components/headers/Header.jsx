import styles from "./Header.module.scss";
import ServicesHeader from "./ServicesHeader";

const Header = () => {
    return <div className={styles.main}>
        {/* <HomeHeader /> */}
        <ServicesHeader/>
    </div >
}

export default Header;