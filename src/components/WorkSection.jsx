import { useState } from "react";
import WorkListItem from "./WorkListItem.jsx";
import { projects } from "../data/projects.js";
import { Link } from "react-router-dom";
import Pill from "./Pill.jsx";

const WorkSection = () => {
  const [previewImg, setPreviewImg] = useState("bg-depthPlaceHolder");
  const [linkTarget, setLinkTarget] = useState("/home");

  const projectCount = 5;
  const filteredProjects = projects
    .filter((project) => project.isFavorite === true)
    .slice(0, projectCount);

  return (
    <section
      className="min-h-[60vh] pb-16 pt-8 max-mobile:h-fit max-mobile:pb-0"
      onMouseLeave={(e) => setPreviewImg("bg-depthPlaceHolder")}
    >
      <div className="max-tablet:gap-6 flex max-h-[700px] flex-row gap-14 max-mobile:flex-col max-mobile:gap-2">
        <div
          className={`${previewImg} w-full rounded-3xl bg-cover max-mobile:h-[50vh] max-mobile:w-full max-mobile:bg-cover`}
        >
          <a href={linkTarget} />
        </div>

        <div className="max-tablet:mr-[2vw] mr-[5vw] w-4/6 max-mobile:mr-0 max-mobile:w-full max-mobile:px-8">
          <div className="flew-row mt-16 flex justify-between max-mobile:mt-6">
            <h2 className="max-tablet:text-3xl font-clashDisplay text-4xl font-extrabold uppercase antialiased max-mobile:text-3xl">
              Projects
            </h2>

            <Link
              to={`/projects`}
              className="max-tablet:text-xl max-tablet:gap-1 flex flex-row items-center gap-2 font-clashDisplay text-2xl antialiased hover:font-medium hover:text-violet-500 max-mobile:px-4 max-mobile:text-2xl"
            >
              see all
              <span className="max-tablet:text-3xl font-clashDisplay text-3xl font-medium antialiased">
                {projects.length}
              </span>
            </Link>
          </div>

          <div className="w-full border-b-2 border-black py-2 pb-2"></div>

          <div className="pb-[14vw] hover:cursor-pointer">
            {filteredProjects.map((project, index) => (
              <WorkListItem
                key={index}
                project={project.title}
                previewImgClass={project.tooltipImgClass}
                linkTarget={`/projects/${project.title}`}
                setLinkTarget={setLinkTarget}
                setPreviewImg={setPreviewImg}
                techStack={project.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
