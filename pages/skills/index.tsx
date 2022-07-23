import Layout from "../../components/layout/layout";
import { SkillBars } from "../../components/skill-bars/skill-bars";
import { SKillsSvg } from "../../svgs/skills";


const SkillPage = () => {
  return (
    <Layout title="Skills" coverImage={<SKillsSvg />} description={""}>
      <div>
        <SkillBars />
      </div>
    </Layout>
  );
};

export default SkillPage;
