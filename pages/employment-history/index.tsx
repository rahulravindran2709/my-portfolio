import Layout from "../../components/layout/layout";

interface EmploymentHistoryPageProps {}

const EmploymentHistoryPage = (props: EmploymentHistoryPageProps): JSX.Element => (
  <Layout
    title={"Employment history"}
    description={"Hey Im a Javascript developer with 14 years of experience"}
  >
    <div style={{ backgroundColor: "yellow" }} className="grow w-full p-4">Here</div>
  </Layout>
);

export default EmploymentHistoryPage;
