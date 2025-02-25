import { Factitem } from "./fact-item";

export const FactSection = () => {
  return (
    <section className="funfact-area mt-60px xl:mt-70px container mx-auto 2xl:mt-30">
      <div className="container">
        <div className="text-primary grid grid-cols-4 gap-x-6 gap-y-7 lg:grid-cols-4 dark:text-white">
                  <Factitem label="Years of experience" value={24} />
                  <Factitem label="Years of experience2" value={24} />
                  <Factitem label="Years of experience3" value={24} />
                  <Factitem label="Years of experience3" value={24} />

        </div>
      </div>
    </section>
  );
};
