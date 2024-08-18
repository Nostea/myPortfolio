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
      <div className="flex flex-row items-center justify-between gap-12 py-5 pb-5 transition-all duration-100 ease-in-out hover:bg-violet-50 hover:py-10">
        <a
          href={linkTarget}
          className="antialiased hover:text-violet-400 max-mobile:text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project}
        </a>
        <div className="hover:text-violet-1 200 flex flex-row flex-wrap gap-2 overflow-x-auto">
          {techStack?.map((tech, index) => (
            <p
              key={index}
              className="rounded-full bg-green-100 px-3 py-1 text-green-500 antialiased max-mobile:text-sm max-mobile:font-light"
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
