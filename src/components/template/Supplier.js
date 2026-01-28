import Link from "next/link"
import { useState } from "react";

import { ProjData as projectdata } from "../../constants/ProjData";
import styles from '@/components/template/Supplier.module.css'
function Supplier() {
const sProjects = projectdata.filter((item) => item.supply === "1");

// const [sProjects, setSProjects] = useState(supplyItems);

  return (

    <div>
        <div>
        <p className={styles.projectP}>تامین تجهیزات شرکت مهندسی دزون ازسازندگان خارجی:</p>
        {sProjects.map((sproj) => (
          <div key={sproj.id} className={styles.divLink}>
           <p>◾</p>
            <Link
              href={{
                pathname: `/supplier/${sproj.id}`,
              }}
              className={styles.projectLink}  >
              {sproj.name}
            </Link>
          </div>
         
        ))}
      </div>
    </div>
  )
}

export default Supplier