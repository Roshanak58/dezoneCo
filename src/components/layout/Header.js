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
    </header>
  );
}

export default Header;
