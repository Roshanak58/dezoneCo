import Image from 'next/image';
import { useState } from 'react';

import styles from "@/pages/projects/proj.module.css";
import { PictureData as pictures } from "../../../constants/PicData";

function Index({picproj,projName}) {
    
      const [pic, setPic] = useState(picproj);
  return (
   <div>
    <h3>{projName}</h3>
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
  )
}

export default Index
export async function getServerSideProps(context) {
  const { id } = context.params;


  const picproj=pictures.filter((pic) => pic.idProj === id);
  const projName=picproj[0].name
  return {
    props: { picproj,projName},
  };
}
