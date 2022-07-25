import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ProjectItemProps {
  designation: string;
  company: string;
  duration: string;
  current?: boolean;
  description: string;
  icon: ReactNode;
}
export const EmploymentCard = (props: ProjectItemProps) => {
  const {
    designation,
    company,
    duration,
    current = false,
    description,
    icon,
  } = props;

  return (
    <motion.li
      className="mb-6 ml-6 flex flex-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 2, delayChildren: 0.25 }}
    >
      <span className="flex transform-gpu -translate-x-9 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        {icon}
      </span>
      <motion.div
        initial={{ rotateY: -180 }}
        animate={{ rotateY: 0 }}
        transition={{ duration: 2, delay: 3 }}
        className={"origin-[-20%_0%]"}
      >
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white ">
          {designation} - {company}
          {current && (
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              Present
            </span>
          )}
        </h3>
        <time className="w-full block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {duration}
        </time>
        <p className="mb-4 w-full text-base font-normal text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </motion.div>
    </motion.li>
  );
};
