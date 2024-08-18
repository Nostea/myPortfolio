import { useState } from "react";
import WorkListItem from "./WorkListItem.jsx";

const WorkSection = () => {
  const [previewImg, setPreviewImg] = useState("bg-depthPlaceHolder");
  const [linkTarget, setLinkTarget] = useState("/home");

  return (
    <section
      className="min-h-[60vh] pb-16 pt-8 max-mobile:h-fit max-mobile:pb-0"
      onMouseLeave={(e) => setPreviewImg("bg-depthPlaceHolder")}
    >
      <div className="flex h-full flex-row gap-14 max-mobile:flex-col max-mobile:gap-2">
        <div
          className={`${previewImg} w-full rounded-3xl bg-cover max-mobile:h-[50vh] max-mobile:w-full max-mobile:bg-cover`}
        >
          <a href={linkTarget} />
        </div>

        <div className="mr-[10vw] w-4/6 max-mobile:mr-0 max-mobile:w-full max-mobile:px-8">
          <div className="flew-row mt-16 flex justify-between max-mobile:mt-6">
            <h2 className="font-clashDisplay text-4xl font-extrabold uppercase antialiased max-mobile:text-3xl">
              Projects
            </h2>
            <p className="font-clashDisplay text-2xl antialiased max-mobile:px-4 max-mobile:text-xl">
              4
            </p>
          </div>

          <div className="w-full border-b-2 border-black py-2 pb-2"></div>

          <div className="pb-[14vw] hover:cursor-pointer">
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
              linkTarget={"https://github.com/Nostea/free2GameV2"}
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
