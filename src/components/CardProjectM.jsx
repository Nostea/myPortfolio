import { Link } from "react-router-dom";
import Pill from "./Pill";

const CardProjectM = ({ project }) => {
  return (
    <>
      <Link to={`/projects/${project.title}`}>
        <article className="flex flex-col overflow-hidden rounded-xl bg-white transition-all duration-75 ease-in hover:border-2 hover:border-purple-500">
          <img src={project.titleImg} alt={project.alt} />
          <div className="flex flex-col p-6">
            <h3 className="mb-2 font-clashDisplay text-2xl font-semibold antialiased">
              {project.title}
            </h3>
            <div className="flex flex-row flex-wrap gap-2">
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
