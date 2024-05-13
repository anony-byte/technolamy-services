import styles from "./WebServices.module.scss";
import AppointmentButton from "../components/AppointmentButton";
import Carousal from "../globals/Carousal";
import ImportImages from "../globals/ImageImport";


const WebServices = () => {
  return (
    <div className={styles.main}>
      <div className={styles.appointment}>
        <AppointmentButton for="web-services" name="get your own website" />
      </div>
      <div className={styles.gallery}>
        <Carousal imagesList={ImportImages("WebServiceImages")} />
      </div>
    </div>
  );
};
export default WebServices;
