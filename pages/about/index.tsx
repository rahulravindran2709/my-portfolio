import Layout from "../../components/layout/layout";

interface AboutPageProps {}

const AboutPage = (props: AboutPageProps): JSX.Element => (
  <Layout
    title={"About me"}
    description={"Hey Im a Javascript developer with 14 years of experience"}
    coverImage={<></>}
  >
    <div style={{ backgroundColor: "red" }} className="grow w-full p-4">
      Here
    </div>
  </Layout>
);

export default AboutPage;
