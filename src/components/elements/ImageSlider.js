import Slider from "react-slick";
import Image from "next/image";

import { PictureData as images } from "@/constants/PicData";
import styles from "@/components/elements/ImageSlider.module.css"
export default function ImageSlider() {
  const settings = {
    // dots: true,  نقاط پایین اسلایدر
    infinite: true, // چرخش بی‌نهایت
    speed: 500, // سرعت انیمیشن
    slidesToShow: 1, // نمایش یک اسلاید
    slidesToScroll: 1, // حرکت یک اسلاید در هر بار
    autoplay: true, // پخش خودکار
    autoplaySpeed: 3000, // هر ۳ ثانیه یکبار
};

 

  return (
    <div className={styles.sliderContainer}>
      <div    className={styles.slider}>
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i} className={styles.slide}>
              <Image
                src={src.pic}
                alt={`Slide ${i + 1}`}
                fill
                priority={i === 0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.wave}>
                <Image
                  src="/images/projects/wave.jpg"
                  alt="wave"
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.slideTitle} >{src.name}</div>
            </div>
          ))}
        </Slider>
       
      </div>
    </div>
  );
}
