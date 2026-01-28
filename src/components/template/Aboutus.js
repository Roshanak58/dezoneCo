import Image from "next/image";
import React, { useState } from "react";
import Certification from "@/components/module/Certification";
import styles from "@/components/template/Aboutus.module.css";
import Link from "next/link";
function AboutUs() {
  const [info, setInfo] = useState(0);
  const [qc, setQc] = useState(0);
  const [qualification, setQualification] = useState(0);
  const [ranking, setRanking] = useState(0);
  const [activity, setActivity] = useState(0);
  const [active, setActive] = useState(null); // نگهداری index دکمه فعال

  const infoClick = () => {
    setInfo(1);
    setQc(0);
    setQualification(0);
    setRanking(0);
    setActivity(0);
    setActive(1);
  };
  const QcClick = () => {
    setInfo(0);
    setQc(1);
    setQualification(0);
    setRanking(0);
    setActivity(0);
    setActive(2);
  };
  const QualificationClick = () => {
    setInfo(0);
    setQc(0);
    setQualification(1);
    setRanking(0);
    setActivity(0);
    setActive(3);
  };
  const RankingClick = () => {
    setInfo(0);
    setQc(0);
    setQualification(0);
    setActivity(0);
    setRanking(1);
    setActive(4);
  };
  const activityClick = () => {
    setInfo(0);
    setQc(0);
    setQualification(0);
    setRanking(0);
    setActivity(1);
    setActive(5);
  };
  return (
    <div>
      <div className={styles.balanceHeight}>
        <div className={styles.balanceDiv}>
          <div
            className={`${styles.service} ${
              active === 1 ? styles.active : styles.inactive
            }`}
          >
            <a href="/aboutus/info">
              <Image
                src="/images/info.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </a>

            <Link href="/aboutus/info" className={styles.aboutLink}>
              اطلاعات کلی شرکت
            </Link>
          </div>

          <div
            className={`${styles.service} ${
              active === 2 ? styles.active : styles.inactive
            }`}
          >
            <a  href="/aboutus/QC">
              <Image src="/images/QC.jpg" alt="Logo" width={100} height={100} />
            </a>
            <Link href="/aboutus/QC" className={styles.aboutLink}>
              خط و مشی کیفی
            </Link>
          </div>
          <div
            className={`${styles.service} ${
              active === 3 ? styles.active : styles.inactive
            }`}
          >
            <Image
              src="/images/Qualification.png"
              alt="Logo"
              width={100}
              height={100}
            />
            <Link  href="/aboutus/Qualification" className={styles.aboutLink}>  گواهی صلاحیت پیمانکاری</Link>
          </div>
          <div
            className={`${styles.service} ${
              active === 4 ? styles.active : styles.inactive
            }`}
          >
            <a href="/aboutus/ranking">
              <Image
                src="/images/Ranking.png"
                alt="Logo"
                width={100}
                height={100}
                onClick={() => RankingClick()}
              />
            </a>

            <Link href="/aboutus/ranking" className={styles.aboutLink}>
              رتبه بندی صلاحیت ها
            </Link>
          </div>
          <div
            className={`${styles.service} ${
              active === 5 ? styles.active : styles.inactive
            }`}
          >
            <a href="/aboutus/activity">
              <Image
                src="/images/activity.jpg"
                alt="Logo"
                width={100}
                height={100}
                onClick={() => activityClick()}
              />
            </a>

            <Link href="/aboutus/activity" className={styles.aboutLink}>
              موضوع فعالیت{" "}
            </Link>
          </div>
        </div>
      </div>
      {qualification === 1 && (
        <Certification
          qualification={qualification}
          setQualification={setQualification}
        />
      )}
    </div>
  );
}

export default AboutUs;
