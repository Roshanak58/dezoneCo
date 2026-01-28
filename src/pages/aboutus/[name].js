import AboutInfo from "@/components/template/AboutInfo";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  const name = router.query.name;

  return (
    <div>
      <AboutInfo type={name} />
    </div>
  );
}

export default Index;
