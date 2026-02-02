import Image from "next/image";
import styles from "@/components/layout/Header.module.css";
import Navbar from "@/components/layout/Navbar";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.rightSection}>
        <div>
          <Image src="/images/dezon.jpg" width="50" height="50" alt="Logo" />
        </div>

        <div className={styles.siteInfo}>
          <h3>شرکت مهندسی دزون</h3>
        </div>
      </div>
      <div className={styles.centerSection}>
        <Navbar />
      </div>

      <div className={styles.leftSection}>
        <p>Dezone Engineering Company</p>
        <p>Municipal Utilities, Water & Wastewater Treatment</p>
      </div>
      <div className={styles.mobileHeader}>
        <div className={styles.alignRight}>
          <div>
            <Image src="/images/dezon.jpg" width="50" height="50" alt="Logo" />
          </div>

          <div className={styles.mobileRight}>
            <h3>شرکت مهندسی دزون</h3>
            <div className={styles.mobileText}>
              <p>Dezone Engineering Company</p>
              <p>Municipal Utilities, Water & Wastewater Treatment</p>
            </div>
          </div>
        </div>
        <div className={styles.mobileLeft}>
          <Navbar /> {/* مطمئن شوید Navbar در حالت موبایل همبرگری نمایش دهد */}
        </div>
      </div>
    </header>
  );
}

export default Header;
