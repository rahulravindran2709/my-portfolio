import { motion, Variants } from "framer-motion";
import styles from "./skill-bars.module.css";

const barAnimation: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.5,
      delay: 2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      delay: 2.75,
    },
  },
};
export interface SkillItemProps {
  skillName: string;
  type: "frontend" | "backend" | "tools";
  proficiency: number;
}
export const SkillItem = (props: SkillItemProps) => {
  const { skillName, proficiency, type } = props;
  return (
    <div
      className={
        "w-full bg-gray-200/5 shadow-md shadow-gray-600 h-6 my-6 border-gray-500 border border-solid"
      }
    >
      <div style={{ width: `${proficiency * 100}%` }}>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={barAnimation}
          className={
            "h-full bg-gradient-to-l from-purple-400 to-purple-200 rounded-r-lg origin-left " +
            styles["bar"]
          }
        >
          <div className="pl-1 font-bold text-stone-500">{skillName}</div>
        </motion.div>
      </div>
    </div>
  );
};

export const SkillBars = () => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={{
        hidden: {
          opacity: 0,
        },
        enter: {
          opacity: 1,
          transition: {
            duration: 1,
            delay: 1.5,
          },
        },
        exit: {
          opacity: 0,
          transition: {
            duration: 3,
          },
        },
      }}
    >
      <SkillItem skillName="React" type="frontend" proficiency={0.9} />
      <SkillItem skillName="Typescript" type="frontend" proficiency={0.8} />
      <SkillItem skillName="Redux" type="frontend" proficiency={0.8} />
      <SkillItem skillName="Material UI" type="frontend" proficiency={0.85} />
      <SkillItem skillName="Openlayers" type="frontend" proficiency={0.75} />
      <SkillItem skillName="SignalR" type="frontend" proficiency={0.7} />
      <SkillItem skillName="Zustand" type="frontend" proficiency={0.5} />
      <SkillItem skillName="NextJS" type="frontend" proficiency={0.4} />
      <SkillItem skillName="Tailwind" type="frontend" proficiency={0.4} />
      <SkillItem skillName="Capacitor" type="frontend" proficiency={0.2} />
      <SkillItem skillName="jQuery" type="frontend" proficiency={0.7} />
      <SkillItem skillName="Bootstrap" type="frontend" proficiency={0.3} />
    </motion.div>
  );
};
