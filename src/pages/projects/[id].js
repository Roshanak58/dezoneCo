import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from '@/pages/projects/proj.module.css'
import { ProjData as projectdata } from "../../constants/ProjData";
import { PictureData as pictures } from "../../constants/PicData";
import { ProcessStepData as ProcessData } from "../../constants/ProcessStepData";
import Image from "next/image";
function Index({ servProject, picproj, processproj }) {
  const [project, setProject] = useState(servProject);
  const [pic, setPic] = useState(picproj);
  const [processStep, setProcessStep] = useState(processproj);
  return (
    <div className={styles.projectAlign}>
      <div className={styles.profileData}>
        <div  className={styles.ProjIdDiv}>
          <h3>پروژه:</h3>
          <p>{project?.name}</p>
        </div>
        <div className={styles.ProjIdDiv}>
          <h3>کارفرما: </h3>
          <p>{project?.employer}</p>
        </div>
        <div className={styles.ProjIdDiv}>
          <h3>مشاور:</h3>
          <p>{project?.consultant}</p>
        </div>
        <div className={styles.ProjIdDiv}>
          <h3>پیمانکار:</h3>
          <p>{project?.contractor}</p>
        </div>
        <div className={styles.ProjIdDiv}>
          <h3>نوع پیمان:</h3>
          <p>{project?.typeOfContract}</p>
        </div>
        <div className={styles.ProjIdDiv}>
          <h3>ظرفیت:</h3>
          <p>{project?.capacity}</p>
          <a style={{fontWeight: "bold"}}> متر مکعب در روز </a>
        </div>
        <div className={styles.ProjIdDiv}>
          <h3>موقعیت:</h3>
          <p>{project?.location}</p>
        </div>
        <div className={styles.ProjIdDiv}>
          <h3>فرآیند:</h3>
          <p>{project?.process}</p>
        </div>
        <div className={styles.ProjIdDiv}>
          <h3>وضعیت:</h3>
          {project?.Status === "active" ? <p>فعال</p> : <p>خاتمه یافته</p>}
        </div>
        <div className={styles.processStep}>
          <h3>مراحل فرایند:</h3>
          <div className={styles.flexContainer}>
            {processStep.map((procS) => (
              <div key={procS.id} >
                <p style={{ fontWeight: "bold", paddingLeft: "5px" }}> - </p>
                <p className={styles.alignText}>{procS?.processStep}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.pictureProj}>
        {pic.map((pict) => (
          <div key={pict.id}>
            {/* <img src={pict.pic} alt="image" /> */}
             <Image
              className={styles.imgBorder}
              src={pict.pic}
              alt="Logo"
              width={400}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
export async function getServerSideProps(context) {
  const { id } = context.params;

  // گرفتن محصول از API
  // const res = await fetch(`https://yourapi.com/products/${id}`);
  // const product = await res.json();
  const servProject = projectdata.find((pdata) => pdata.id === id);
  const picproj = pictures.filter((pic) => pic.idProj === id);
  const processproj = ProcessData.filter((proc) => proc.idProj === id);

  return {
    props: { servProject, picproj, processproj },
  };
}
