import type { NextPage } from "next";
import Layout from "../components/layout/layout";

const Home: NextPage = () => {
  return (
    <Layout title={"Hello!"} description={""} coverImage={null}>
      <div>Hello</div>
    </Layout>
  );
};

export default Home;
