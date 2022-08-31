import Layout from "../../components/layout/layout";
import styles from "./project.module.css";
import { gql } from "@apollo/client";
import client from "../../graphql/apollo-client";
import { GetServerSideProps } from "next";
import Image from "next/image";

export interface ProjectItem {
  createdAt: string;
  description: string;
  diskUsage: number;
  homepageUrl: string;
  id: string;
  isPrivate: boolean;
  name: string;
  updatedAt: string;
  url: string;
}
export interface ProjectItemProps {
  repository: ProjectItem;
}
const ProjectItem = (props: ProjectItemProps) => {
  const { repository } = props;
  return (
    <div className={`${styles.project} grid gap-1`}>
      <a className={`${styles["project-image"]}`} href={repository.homepageUrl}>
        <img
          src="https://lynnandtonic.com/assets/images/web-nestflix.jpg"
          className="border-stone-500 border p-1.5 border-solid"
          width="1150"
          height="700"
          alt="Nestflix"
        />
      </a>
      <h2 className="text-3xl">
        <a href={repository.homepageUrl}>{repository.name}</a>
      </h2>
      <p className={`${styles["desc"]}`}>{repository.description}</p>
      <a className={`${styles["social"]} github dark`} href={repository.url}>
        <Image width={20} height={20} src="/github-logo.png" alt="github-logo" />
      </a>
    </div>
  );
};

export interface ProjectsProps {
  repositories: Array<ProjectItem>;
}
const Projects = (props: ProjectsProps) => {
  const { repositories } = props;
  console.log(repositories, "Repositories");

  return (
    <Layout title="Projects" coverImage={null} description="">
      <div className="projects-list grid gap-4 grid-cols-4 dark:text-white">
        {repositories.map((repo) => (
          <ProjectItem key={repo.id} repository={repo} />
        ))}
      </div>
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps<
  ProjectsProps
> = async () => {
  const { data } = await client.query({
    query: gql`
      query results {
        search(
          query: "topic:project sort:updated-desc user:rahulravindran2709"
          type: REPOSITORY
          first: 100
        ) {
          repositoryCount
          nodes {
            ... on Repository {
              name
              description
              updatedAt
              createdAt
              diskUsage
              id
              isPrivate
              url
              homepageUrl
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      repositories: data.search.nodes,
    },
  };
};
export default Projects;
