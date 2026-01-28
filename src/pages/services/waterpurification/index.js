import Image from 'next/image'
import Link from 'next/link'

import styles from '@/pages/services/treatment.module.css'

function Waterpurification() {
  return (
    <div className={styles.infoLi}>
             <Image
              className={styles.imgBorder}
              src="/images/water.jpg"
              alt="Logo"
              width={105}
              height={105}
            />
            
            <h3>تصفیه آب</h3>
            <p>
              شرکت مهندسی دزون تعداد قابل ملاحظه ای پروژه کلید در دست در زمینه
              تصفیه آب انجام داده است. این پروژه ها در طیف وسیعی از پروژه های
              کوچک مانند سختی گیری آب، فیلتر یا واحدهای تزریق مواد شیمیایی تا
              پروژه های بزرگ در مقیاس شهری و صنعتی را شامل می شوند.
            </p>
            <div className={styles.balanceItem}>
              <div>
                <Image
                  className={styles.imgBorder}
                  src="/images/water.png"
                  alt="Logo"
                  width={100}
                  height={100}
                />
                <Link href="/services/waterpurification/DrinkingWaterPurification"> تصفیه آب آشامیدنی</Link>
                {/* <button onClick={() => drinkwClick()}>
                  تصفیه آب آشامیدنی{" "}
                </button> */}
              </div>
              <div>
                <Image
                  className={styles.imgBorder}
                  src="/images/Industrial.jpg"
                  alt="Logo"
                  width={100}
                  height={100}
                />
                <Link href="/services/waterpurification/IndustrialWaterTreatment">تصفیه آب های صنعتی</Link>
                {/* <button onClick={() => industrywClick()}>
                  تصفیه آب های صنعتی{" "}
                </button> */}
              </div>
            </div>
          </div>
  )
}

export default Waterpurification