import { FactSection } from "./fact-section";
import { IntroSection } from "./Intro-section";

export const HeroSection = () => {
  return (
    <section className="hero-section relative overflow-hidden pt-32 pb-10 md:pb-6 lg:pt-40 lg:pb-12 xl:pt-64">
      <div>
        <svg
          viewBox="0 0 1320 300"
          className="absolute top-[55%] left-[46%] z-[-1] flex h-full w-full translate-x-[-50%] translate-y-[-50%] animate-pulse items-center justify-center overflow-hidden uppercase"
        >
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            className="animate-stroke stroke-primary inline-block fill-transparent stroke-[1.2] text-[16rem]"
          >
            HI
          </text>
        </svg>
      </div>
      <IntroSection />
      <FactSection />
      <div className="bg-circular-gradient absolute top-0 right-0 mt-[-5%] mr-[-5%] h-80 w-80 rounded-[50%] blur-[150px]" />
    </section>
  );
};
