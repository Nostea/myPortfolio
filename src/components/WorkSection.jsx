import { useState } from "react";
import WorkListItem from "./WorkListItem.jsx";

const WorkSection = () => {
  const [previewImg, setPreviewImg] = useState("bg-depthPlaceHolder");
  const [linkTarget, setLinkTarget] = useState("/home");


  return (
    <section className="mt-8 pb-32" onMouseLeave={(e) => setPreviewImg("bg-depthPlaceHolder")}>
      <div className="flex flex-row gap-14">
        <div className={`${previewImg} w-full rounded-3xl bg-cover`}>
          <a href={linkTarget} />
        </div>

        <div className="w-full pr-12">
          <div className="flew-row mt-16 flex justify-between">
            <h2 className="font-clashDisplay text-4xl font-extrabold uppercase">
              Work
            </h2>
            <p className="font-clashDisplay text-2xl">9</p>
          </div>

          <div className="w-full border-b-2 border-black py-2 pb-2"></div>

          <div className="pb-36">
            <WorkListItem
              project={"weather.io"} 
              previewImgClass={"bg-gridBG"} 
              linkTarget={"https://www.github.com"}
              setLinkTarget={setLinkTarget}
              setPreviewImg={setPreviewImg}
              techStack={["Typescript", "React.js"]}
            />

            <WorkListItem
              project={"Pokedex"} 
              previewImgClass={"bg-techstackBG"} 
              linkTarget={"https://www.github.com"}
              setLinkTarget={setLinkTarget}
              setPreviewImg={setPreviewImg}
              techStack={["Typescript", "React.js"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
