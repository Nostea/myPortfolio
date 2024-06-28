import SkillsPill from "./SkillsPill";

const TechstackSection = () => {
  return (
    <section className="bg-repeat-x-y mb-32 flex flex-col items-center bg-gridBG max-desktop:px-[10vw] max-mobile:w-full">
      <h2 className="pb-8 font-clashDisplay text-3xl font-bold uppercase">
        &#60; Techstack &#47;&gt;
      </h2>
      <div className="flex flex-row flex-wrap gap-2 px-16 max-mobile:mb-6 max-mobile:px-0">
        <SkillsPill skill="HTML/CSS" />
        <SkillsPill skill="Tailwind CSS" />
        <SkillsPill skill="JavaScript" />
        <SkillsPill skill="React.js" />
        <SkillsPill skill="Node.js" />
        <SkillsPill skill="MongoDb" />
        <SkillsPill skill="Rest API" />
        <SkillsPill skill="Figma" />
        <SkillsPill skill="Photoshop" />
        <SkillsPill skill="Illustrator" />
        <SkillsPill skill="Blender" />
      </div>
      <div className="flex items-center justify-center">
        <img src="/codeHello.png" alt="code Greeting" className="w-full" />
      </div>
    </section>
  );
};

export default TechstackSection;
