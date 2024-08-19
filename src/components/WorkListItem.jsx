import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const WorkListItem = ({
  project,
  previewImgClass,
  linkTarget,
  setPreviewImg,
  setLinkTarget,
  techStack,
  liveSite,
  detailpageLink,
  githubLink,
}) => {
  return (
    <div
      onMouseOver={(e) => {
        setPreviewImg(previewImgClass);
        setLinkTarget(linkTarget);
      }}
    >
      <div className="flex flex-row items-center justify-between gap-12 px-2 py-6 pb-5 transition-all duration-100 ease-in-out hover:bg-violet-50">
        <a
          href={linkTarget}
          className="antialiased hover:text-violet-400 max-mobile:text-sm"
        >
          {project}
        </a>
        <div className="hover:text-violet-1 200 items flex flex-row flex-wrap justify-end gap-2 overflow-x-auto max-mobile:gap-4">
          <a
            href={liveSite}
            className="flex flex-row items-center gap-1 rounded bg-green-100 px-2 py-1 font-clashDisplay text-sm antialiased transition-all duration-200 ease-in-out hover:bg-violet-400"
          >
            <FontAwesomeIcon icon={faGlobe} /> visit
          </a>
          <a
            href={githubLink}
            className="flex flex-row items-center gap-1 rounded border-[1px] border-black px-2 py-1 font-clashDisplay text-sm antialiased transition-all duration-200 ease-in-out hover:border-violet-500 hover:text-violet-500"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </div>
      </div>
      <div className="w-full border-b-2 border-black"></div>
    </div>
  );
};

export default WorkListItem;
