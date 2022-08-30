import Layout from "../../components/layout/layout";
import styles from "./project.module.css";

export interface ProjectItemProps {}
const ProjectItem = (props: ProjectItemProps) => {
  return (
    <div className={`${styles.project} grid gap-1`}>
      <a
        className={`${styles["project-image"]} hover:border-violet-600 border-2 hover:border-solid`}
        href="https://nestflix.fun"
      >
        <img
          src="https://lynnandtonic.com/assets/images/web-nestflix.jpg"
          className="border-stone-500 border p-1.5 border-solid"
          width="1150"
          height="700"
          alt="Nestflix"
        />
      </a>
      <h2>
        <a href="https://nestflix.fun">Nestflix</a>
      </h2>
      <p className={`${styles["desc"]}`}>
        A wiki dressed up as a streaming platform that catalogs fictional films
        and tv shows inside real movies and tv shows.
      </p>
      <a
        className={`${styles["social"]} github dark`}
        href="https://github.com/lynnandtonic/nestflix.fun"
      >
        GitHub
      </a>
    </div>
  );
};
const Projects = () => (
  <Layout title="Projects" coverImage={null} description="">
    <div className="projects-list grid gap-4 grid-cols-4 dark:text-white">
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </div>
  </Layout>
);

export default Projects;
