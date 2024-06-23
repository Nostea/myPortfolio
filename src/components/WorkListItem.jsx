const WorkListItem = ({ project, previewImgClass, linkTarget, setPreviewImg, setLinkTarget, techStack }) => {
  return (
    <div onMouseOver={(e) => {
      setPreviewImg(previewImgClass);
      setLinkTarget(linkTarget);
    }
    }
    >
      <div className="flex flex-row justify-between gap-8 py-5 pb-5">
        <p>{project}</p>
        <div className="flex flex-row flex-wrap gap-2">
          { techStack?.map((tech, index) => 
            <p key={index} className="rounded-full bg-green-100 px-3 py-1 text-green-500">
              {tech}
            </p>
          )}
        </div>
      </div>
      <div className="w-full border-b-2 border-black"></div>
    </div>
  );
};

export default WorkListItem;
