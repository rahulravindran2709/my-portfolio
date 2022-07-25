import { motion } from "framer-motion";
import { EmploymentCard } from "../../components/employment-card/employment-card";
import Layout from "../../components/layout/layout";
import { Angular } from "../../svgs/angular";
import { Java } from "../../svgs/java";
import { ReactIcon } from "../../svgs/react";
import { Responsive } from "../../svgs/responsive";
import { WorkSVG } from "../../svgs/work";

interface EmploymentHistoryPageProps {}

const EmploymentHistoryPage = (
  props: EmploymentHistoryPageProps
): JSX.Element => (
  <Layout
    title={"Employment history"}
    description={""}
    coverImage={<WorkSVG />}
  >
    <div className="grow w-full p-6 overflow-y-auto">
      <motion.ol
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ staggerChildren: 0.5, delay: 2, duration: 3 }}
        className="relative border-l border-gray-200 dark:border-gray-700 origin-[-0%_0%]"
      >
        <EmploymentCard
          company="MetOcean Telematics"
          designation="Senior Frontend Developer"
          duration="May 2019"
          current
          icon={<ReactIcon />}
          description={
            "Designed and developed a next generation cloud based web application for IoT devices"
          }
        />
        <EmploymentCard
          company="Copart Canada"
          icon={<ReactIcon />}
          designation="Senior Frontend Developer"
          duration="March 2018 - April 2019"
          description="Developing single page applications for supporting Copart employees in the yard"
        />
        <EmploymentCard
          icon={<ReactIcon />}
          company="Copart India Technology Center"
          designation="Senior Frontend Developer"
          duration="April 2017 - December 2017"
          description="Developing single page applications for supporting Copart employees in the yard"
        />
        <EmploymentCard
          company="Cognizant Technology Solutions"
          designation="Technology Lead"
          duration="April 2014 - March 2017"
          icon={<Responsive />}
          description="Development and maintenance of responsive website for a client in the insurance domain"
        />
        <EmploymentCard
          company="Infosys Limited"
          designation="Technology Analyst"
          duration="October 2012 - January 2014"
          icon={<Angular />}
          description="Worked on big data analytics applications in government domain"
        />
        <EmploymentCard
          company="Infosys Limited"
          designation="Senior Systems Engineer"
          duration="October 2009 - September 2012"
          icon={<Java />}
          description="Worked on multiple J2EE web based applications in banking domain"
        />
      </motion.ol>
    </div>
  </Layout>
);

export default EmploymentHistoryPage;
