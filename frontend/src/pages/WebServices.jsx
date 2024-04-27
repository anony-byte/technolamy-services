import styles from "./WebServices.module.scss";
import AppointmentButton from "../components/AppointmentButton";
import Carousal from "../globals/Carousal";

const importAll = (r) => r.keys().map(r);
const filesnames = importAll(
  require.context(
    "../resources/webservicesimages/",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);

const WebServices = () => {
  return (
    <div className={styles.main}>
      <div className={styles.appointment}>
        <AppointmentButton for="web-services" name="get your own website" />
      </div>
      <div className={styles.gallery}>
        <Carousal imagesList={filesnames} />
      </div>
    </div>
  );
};
export default WebServices;
