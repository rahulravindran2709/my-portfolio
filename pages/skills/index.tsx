import Layout from "../../components/layout/layout";
import { SkillBars } from "../../components/skill-bars/skill-bars";
import { SkillsSvg } from "../../svgs/skills";

const SkillPage = () => {
  return (
    <Layout title="Skills" coverImage={<SkillsSvg />} description={""}>
      <div>
        <SkillBars />
      </div>
    </Layout>
  );
};

export default SkillPage;
