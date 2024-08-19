const WorkListItem = ({
  project,
  previewImgClass,
  linkTarget,
  setPreviewImg,
  setLinkTarget,
  techStack,
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
          target="_blank"
          rel="noopener noreferrer"
        >
          {project}
        </a>
        <div className="hover:text-violet-1 200 items max-tablet:gap-1 flex flex-row flex-wrap justify-end gap-2 overflow-x-auto">
          {techStack?.map((tech, index) => (
            <p
              key={index}
              className="max-tablet:text-xs rounded-full bg-green-100 px-3 py-1 text-green-500 antialiased max-mobile:text-xs max-mobile:font-light"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full border-b-2 border-black"></div>
    </div>
  );
};

export default WorkListItem;
