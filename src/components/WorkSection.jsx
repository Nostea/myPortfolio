import { useState } from "react";
import WorkListItem from "./WorkListItem.jsx";

const WorkSection = () => {
  const [previewImg, setPreviewImg] = useState("bg-depthPlaceHolder");
  const [linkTarget, setLinkTarget] = useState("/home");

  return (
    <section
      className="mt-8 min-h-[60vh] pb-[10vh] max-mobile:h-fit"
      onMouseLeave={(e) => setPreviewImg("bg-depthPlaceHolder")}
    >
      <div className="flex h-full flex-row gap-14 max-mobile:flex-col max-mobile:gap-2">
        <div
          className={`${previewImg} w-[150vw] rounded-3xl bg-cover max-mobile:h-[50vh] max-mobile:w-full max-mobile:bg-cover`}
        >
          <a href={linkTarget} />
        </div>

        <div className="mr-[10vw] w-full max-mobile:mr-0 max-mobile:px-4">
          <div className="flew-row mt-16 flex justify-between max-mobile:mt-6">
            <h2 className="font-clashDisplay text-4xl font-extrabold uppercase max-mobile:text-3xl">
              Projects
            </h2>
            <p className="font-clashDisplay text-2xl max-mobile:px-4 max-mobile:text-xl">
              4
            </p>
          </div>

          <div className="w-full border-b-2 border-black py-2 pb-2"></div>

          <div className="pb-36 hover:cursor-pointer">
            <WorkListItem
              project={"GreenMarket"}
              previewImgClass={"bg-greenMarket"}
              linkTarget={"https://github.com/MorphDE/GreenMarket"}
              setLinkTarget={setLinkTarget}
              setPreviewImg={setPreviewImg}
              techStack={["JavaScript", "React.js", "Node.js"]}
            />
            <WorkListItem
              project={"My portfolio website"}
              previewImgClass={"bg-depthPlaceHolder"}
              linkTarget={"https://github.com/Nostea/myPortfolio"}
              setLinkTarget={setLinkTarget}
              setPreviewImg={setPreviewImg}
              techStack={["JavaScript", "React.js", "Figma"]}
            />
            <WorkListItem
              project={"Free2Game"}
              previewImgClass={"bg-free2gamePreview"}
              linkTarget={"https://github.com/Nostea/Free2GameV3"}
              setLinkTarget={setLinkTarget}
              setPreviewImg={setPreviewImg}
              techStack={["Rest API", "JavaScript", "React.js"]}
            />

            <WorkListItem
              project={"weather.io"}
              previewImgClass={"bg-weatherIO"}
              linkTarget={"https://github.com/Nostea/weatherApp"}
              setLinkTarget={setLinkTarget}
              setPreviewImg={setPreviewImg}
              techStack={["Rest Api", "JavaScript", "React.js"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
