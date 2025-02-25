import { SocialLinks } from "./social-links";


export const IntroSection = () => {
  return (
    <section className="container mx-auto">
      <div className="hidden gap-8 md:grid md:grid-cols-2 md:items-center">
        <div>
          <h4 className="mb-1.5 text-xl font-bold md:text-2xl lg:text-4xl xl:mb-2.5 dark:text-white">
            I am Rahul
          </h4>
          <h1 className="text-linear-gradient dark:bg-gradient-text mb-4 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Next-Level Web <br />
            Developer.
          </h1>
          <div className="my-7 flex items-center justify-center md:hidden">
            <img
              width="768"
              height="1152"
              src="/public/LR_09652.JPG"
              className="border-seondary-color hover:border-primary-color max-w-[80%] rotate-[4.29deg] rounded-[38px] border-2 transition-all duration-300 hover:rotate-0" />
          </div>
          <p className="text-primary max-w-[540px] text-xl dark:text-white">
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-7 md:mt-7 lg:mt-12 lg:flex-nowrap lg:gap-6">
            <div>
              <a
                href="#"
                className="text-4 text-primary bg-200 hover:bg-primary border-primary tracking-1px rounded-full border bg-transparent px-9 py-4 leading-1 font-medium text-nowrap capitalize transition-all duration-300 hover:text-white"
              >
                Download CV
                <i className="flaticon-download text-4 ml-0.5"></i>
              </a>
            </div>
            <div>
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="relative hidden h-96 w-80 rotate-[4.29deg] transition-all duration-300 hover:rotate-0 md:flex md:items-center md:justify-center">
          <div className="hover:border-primary border-primary-dark h-full w-full overflow-hidden rounded-4xl border-1 transition-all duration-300 hover:border-2">
            <img
              src="/public/LR_09652.JPG"
              alt="banner image"
              className="h-fit w-full" />
          </div>
          <div className="bg-circular-gradient absolute top-0 right-0 mt-[-5%] mr-[-5%] h-72 w-72 rounded-[50%] blur-[150px]" />
        </div>
      </div>
    </section>
  );
};
