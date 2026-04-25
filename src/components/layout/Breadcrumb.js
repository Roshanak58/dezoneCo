"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/components/layout/Breadcrumb.module.css"

export default function Breadcrumb() {
  const router = useRouter();

  const pathname = router.asPath || "";   // جلوگیری از null
  const parts  = pathname.split("/").filter(Boolean);

  // 📌 دیکشنری ترجمه مسیرها
  const titles = {
    "aboutus": "درباره ما",
    "contactus": "تماس با ما",
    "projects": "پروژه ها",
    "blog": "وبلاگ",
    "services": "خدمات",
    "urbanWasteWater":"تصفیه فاضلاب شهری",
    "IndustrialWastewater":"تصفیه فاضلاب صنعتی",
    "IndustrialWaterTreatment":"تصفیه آب های صنعتی",
    "DrinkingWaterPurification":"تصفیه آب آشامیدنی",
    "supplier":"تامین قطعات",
    "info":" ",
    "QC":" ",
    "ranking":" ",
    "activity":" ",
    "qualification":" ",
    "engineerS":" ",
    "wstreatment":" ",
    "wtreatment":" ",
    "pstation":" ",
    "operation":" ",
    "afterSale":" ",
    "wastewatertreatment":"تصفیه فاضلاب ",
    "waterpurification":"تصفیه آب",
    "pictureP":" ",
    // هر مقدار دیگر را اینجا اضافه کنید
  };
  const isId = (str) => {
    // عددی بودن
    if (/^\d+$/.test(str)) return true;

    // UUID مانند  550e8400-e29b-41d4-a716-446655440000
    if (/^[0-9a-fA-F-]{16,}$/.test(str)) return true;

    return false;
  };

  // 📌 اگر آخر مسیر ID بود، حذفش کن
  if (parts.length > 0 && isId(parts[parts.length - 1])) {
    parts.pop();
  }



  let pathUrl = "";

  return (
    <nav className={styles.breadcrumb}>
      <Link href="/">خانه</Link>

      {parts.map((part, index) => {
       
        pathUrl += `/${part}`;
        // const isLast = index === parts.length - 1;

        // اگر ترجمه موجود بود نمایش بده، در غیر این صورت خود slug را نمایش بده
        // const title = titles[part.toLowerCase()] || decodeURIComponent(part);
        const title = titles[part] || titles[part.toLowerCase()] || decodeURIComponent(part);

        return (
          <span key={index}>
            <span className={styles.sep}> / </span>
            {/* {isLast ? (
              <span className={styles.current">{title}</span>
              ) : ( */}
              <Link href={pathUrl}>{title}</Link>
            {/* )} */}
          </span>
        );
      })}
    </nav>
  );
}
