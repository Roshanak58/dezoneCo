import styles from '@/components/template/Contactus.module.css'

 import dynamic from "next/dynamic";

// Map import  from "../elements/Map";
const Map = dynamic(() => import("../elements/Map"), {
  ssr: false, // ⬅ جلوی اجرای سروری را می‌گیرد
});


function ContactUs() {
  return (
    <div className={styles.contactUs}>
      <div className={styles.contactFont}>
        <div className={styles.callUs}>
          <p>آدرس:</p>
          <p className={styles.pBlue}>
            تهران، انتهای همت غرب شهرک گلستان، خیابان بنفشه، پلاک 53{" "}
          </p>
        </div>
        <div className={styles.callUs}>
          <p>تلفن:</p>
          <p className={styles.pBlue}>021-44700011 </p>
        </div>
        <div className={styles.callUs}>
          <p>فکس: </p>
          <p className={styles.pBlue}>021-44763634</p>
        </div>
        <div className={styles.callUs}>
            <p>پست الکترونیک:</p>
          <p className={styles.pBlue}> info@dezoneco.com</p>
        </div>
      </div>
      <div className={styles. mapStyle}>
        {/* <h1>لوکیشن شرکت</h1> */}
      <Map />
      </div>
    </div>
  );
}

export default ContactUs;
