import Image from "next/image";
import styles from "./Announcement.module.scss"


const Announcement = () => {
  return (
    <div className={styles.announcement} role="alert">
      <p>Need help? Call us: (+46) 0722580148</p>
      <div className={`${styles.flexContainer}`}>
        <a href="#">
          <Image src="/Icons/location.svg" alt="Location" width={25} height={25} />
          <p>Our store</p>
        </a>

        <a href="#">
          <Image src="/Icons/truck.svg" alt="Truck" width={25} height={25} />
          <p>Track your order</p>
        </a>
      </div>
    </div>
  );
};

export default Announcement;