import styles from "./skill-bars.module.css";

export const SkillItem = () => (
  <div className={"h-4 w-full bg-purple-500 my-4 " + styles["bar"]}></div>
);

export const SkillBars = () => {
  return <SkillItem />;
};
