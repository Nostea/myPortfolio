import { Link } from "react-router-dom";
import Pill from "./Pill";

const CardProjectM = ({ project }) => {
  return (
    <>
      <Link to={`/projects/${project.title}`}>
        <article className="flex flex-col overflow-hidden rounded-xl bg-white transition-all duration-75 ease-in hover:outline hover:outline-2 hover:outline-violet-500">
          <img
            src={project.titleImg}
            alt={project.alt}
            className="h-96 object-cover object-left"
          />
          <div className="max-desktopM:min-h-52 flex min-h-48 flex-col p-6 max-mobile:min-h-fit">
            <h3 className="max-tablet:mb-1 mb-2 font-clashDisplay text-2xl font-semibold antialiased">
              {project.title}
            </h3>
            <div className="flex flex-row flex-wrap items-start gap-1">
              {project.skills.map((skill, skillIndex) => (
                <Pill key={skillIndex} text={skill} />
              ))}
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};

export default CardProjectM;
