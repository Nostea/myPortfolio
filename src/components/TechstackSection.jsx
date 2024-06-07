import SkillsPill from "./SkillsPill";

const TechstackSection = () => {
  return (
    <section className="flex flex-col items-center pb-12">
      <h2 className="pb-8 font-clashDisplay text-3xl font-bold uppercase">
        Techstack
      </h2>
      <div className="flex flex-row flex-wrap gap-2">
        <SkillsPill skill="HTML/CSS" />
        <SkillsPill skill="JavaScript" />
        <SkillsPill skill="TypeScript" />
        <SkillsPill skill="React.js" />
        <SkillsPill skill="Node.js" />
        <SkillsPill skill="MongoDb" />
        <SkillsPill skill="Rest API" />
        <SkillsPill skill="Figma" />
        <SkillsPill skill="Photoshop" />
      </div>
      <div className="flex items-center justify-center">
        <img src="/codeHello.png" alt="code Greeting" className="w-full" />
      </div>
    </section>
  );
};

export default TechstackSection;
