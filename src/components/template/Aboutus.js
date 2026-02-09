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
          <Link href="/aboutus/info" className={styles.service}>
            <Image src="/images/info.png" alt="Logo" width={100} height={100} />
            <p className={styles.serviceP}>اطلاعات کلی شرکت</p>
            <span className={styles.overlayText}>اطلاعات کلی شرکت</span>
          </Link>

          <Link href="/aboutus/QC" className={styles.service}>
            <Image src="/images/QC.jpg" alt="Logo" width={100} height={100} />
            <p className={styles.serviceP}>خط و مشی کیفی</p>
            <span className={styles.overlayText}>خط و مشی کیفی</span>
          </Link>

          <Link href="/aboutus/Qualification" className={styles.service}>
            <Image
              src="/images/Qualification.png"
              alt="Logo"
              width={100}
              height={100}
            />
            <p className={styles.serviceP}>گواهی صلاحیت پیمانکاری</p>
            <span className={styles.overlayText}>گواهی صلاحیت پیمانکاری</span>
          </Link>
          <Link href="/aboutus/ranking" className={styles.service}>
            <Image
              src="/images/Ranking.png"
              alt="Logo"
              width={100}
              height={100}
              onClick={() => RankingClick()}
            />
            <p className={styles.serviceP}>رتبه بندی صلاحیت ها</p>
            <span className={styles.overlayText}>رتبه بندی صلاحیت ها</span>
          </Link>

          <Link href="/aboutus/activity" className={styles.service}>
            <Image
              src="/images/activity.jpg"
              alt="Logo"
              width={100}
              height={100}
              onClick={() => activityClick()}
            />
            <p className={styles.serviceP}>موضوع فعالیت </p>
            <span className={styles.overlayText}>موضوع فعالیت </span>
          </Link>
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
