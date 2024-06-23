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
      <div className="flex flex-row items-center justify-between gap-8 py-5 pb-5 hover:bg-violet-50">
        <p className="max-mobile:text-sm hover:text-violet-400">{project}</p>
        <div className="hover:text-violet-1 200 flex flex-row flex-wrap gap-2 overflow-x-auto">
          {techStack?.map((tech, index) => (
            <p
              key={index}
              className="max-mobile:text-sm max-mobile:font-light rounded-full bg-green-100 px-3 py-1 text-green-500"
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
