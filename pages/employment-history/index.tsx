import { ReactNode } from "react";
import Layout from "../../components/layout/layout";
import { Angular } from "../../svgs/angular";
import { Java } from "../../svgs/java";
import { ReactIcon } from "../../svgs/react";
import { Responsive } from "../../svgs/responsive";
import { WorkSVG } from "../../svgs/work";

interface EmploymentHistoryPageProps {}

interface ProjectItemProps {
  designation: string;
  company: string;
  duration: string;
  current?: boolean;
  description: string;
  icon: ReactNode;
}
const ProjectItem = (props: ProjectItemProps) => {
  const {
    designation,
    company,
    duration,
    current = false,
    description,
    icon
  } = props;

  return (
    <li className="mb-10 ml-6">
      <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        {icon}
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {designation} - {company}
        {current && (
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            Present
          </span>
        )}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {duration}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </li>
  );
};
const EmploymentHistoryPage = (
  props: EmploymentHistoryPageProps
): JSX.Element => (
  <Layout title={"Employment history"} description={""} coverImage={<WorkSVG />}>
    <div className="grow w-full p-6 overflow-y-auto">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <ProjectItem
          company="MetOcean Telematics"
          designation="Senior Frontend Developer"
          duration="May 2019"
          current
          icon={<ReactIcon />}
          description={
            "Designed and developed a next generation cloud based web application for IoT devices"
          }
        />
        <ProjectItem
          company="Copart Canada"
          icon={<ReactIcon />}
          designation="Senior Frontend Developer"
          duration="March 2018 - April 2019"
          description="Developing single page applications for supporting Copart employees in the yard"
        />
        <ProjectItem
          icon={<ReactIcon />}
          company="Copart India Technology Center"
          designation="Senior Frontend Developer"
          duration="April 2017 - December 2017"
          description="Developing single page applications for supporting Copart employees in the yard"
        />
        <ProjectItem
          company="Cognizant Technology Solutions"
          designation="Technology Lead"
          duration="April 2014 - March 2017"
          icon={<Responsive />}
          description="Development and maintenance of responsive website for a client in the insurance domain"
        />
        <ProjectItem
          company="Infosys Limited"
          designation="Technology Analyst"
          duration="October 2012 - January 2014"
          icon={<Angular />}
          description="Worked on big data analytics applications in government domain"
        />
        <ProjectItem
          company="Infosys Limited"
          designation="Senior Systems Engineer"
          duration="October 2009 - September 2012"
          icon={<Java />}
          description="Worked on multiple J2EE web based applications in banking domain"
        />
      </ol>
    </div>
  </Layout>
);

export default EmploymentHistoryPage;
