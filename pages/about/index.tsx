import Image from "next/image";
import Layout from "../../components/layout/layout";

interface AboutPageProps {}

const AboutPage = (props: AboutPageProps): JSX.Element => (
  <Layout
    title={"About me"}
    description={""}
    coverImage={
      <Image width="768" height="1152" src="/LR_09652.JPG" alt="my-cover" />
    }
  >
    <div className="grow w-full p-4 text-white text-lg">
      <p className="">
        I am a front end developer adept at using modern web frameworks and
        tooling to build scalable web applications. I have been building
        frontend apps since the <em>dark ages</em> ie, Internet explorer 8 with
        html 4.1 with table layouts. Glad that they buried IE. Yay!
      </p>
      <br />
      <p>
        Since then, I&apos;ve worked on JQuery, Angular 1.x, Bootstrap CSS,
        Foundation etc before settling into the React ecosystem.
        <br />I call React home now but at the same time I do like dabbling in
        cutting edge stuff in the Ui space, all the while making sure the app in
        production runs as well as it can. I always place a strong emphasis on
        &quot;doing it right&quot; as opposed to &quot;shipping it quick&quot;.
      </p>
      <br />
      <p>
        Areas of frontend React expertise include but not limited to Material
        UI,Redux, Zustand. Have also extensively worked on maps using OpenLayers
        and some baby steps in Three.JS
      </p>
      <br />
      <p>
        I&apos;ve also worked on a few full stack TypeScript projects in my free
        time. Some of these were applications with separate frontend and an API
        backend. <br />
        However, my recent experiments involved using full stack React
        frameworks like Next and Remix.
      </p>
    </div>
  </Layout>
);

export default AboutPage;
