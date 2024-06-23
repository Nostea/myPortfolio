import { useState } from "react";
import WorkListItem from "./WorkListItem.jsx";

const WorkSection = () => {
  const [previewImg, setPreviewImg] = useState("bg-depthPlaceHolder");
  const [linkTarget, setLinkTarget] = useState("/home");

  return (
    <section
      className="max-mobile:h-fit mt-8 h-[60vh] pb-[10vh]"
      onMouseLeave={(e) => setPreviewImg("bg-depthPlaceHolder")}
    >
      <div className="max-mobile:flex-col max-mobile:gap-2 flex h-full flex-row gap-14">
        <div
          className={`${previewImg} max-mobile:h-[50vh] max-mobile:bg-cover max-mobile:w-full w-[150vw] rounded-3xl bg-cover`}
        >
          <a href={linkTarget} />
        </div>

        <div className="max-mobile:mr-0 max-mobile:px-4 mr-[10vw] w-full">
          <div className="flew-row max-mobile:mt-6 mt-16 flex justify-between">
            <h2 className="max-mobile:text-3xl font-clashDisplay text-4xl font-extrabold uppercase">
              Projects
            </h2>
            <p className="max-mobile:text-xl max-mobile:px-4 font-clashDisplay text-2xl">
              3
            </p>
          </div>

          <div className="w-full border-b-2 border-black py-2 pb-2"></div>

          <div className="pb-36 hover:cursor-pointer">
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

            <WorkListItem
              project={"My Portfolio"}
              previewImgClass={"bg-depthPlaceHolder"}
              linkTarget={"https://github.com/Nostea/myPortfolio"}
              setLinkTarget={setLinkTarget}
              setPreviewImg={setPreviewImg}
              techStack={["JavaScript", "React.js", "Figma"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
