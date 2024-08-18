import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Pill from "./Pill";

const CardProjectM = ({ topSkill }, { projectName }) => {
  return (
    <>
      <Link to="/projectdetail">
        <article className="flex flex-col overflow-hidden rounded-xl bg-white transition-all duration-75 ease-in hover:border-2 hover:border-purple-500">
          <img src="/depthPlaceholder.jpg" alt="" />
          <div className="flex flex-col p-6">
            <h3 className="mb-2 font-clashDisplay text-2xl font-semibold antialiased">
              Project name
            </h3>
            <Pill text="React" />
          </div>
        </article>
      </Link>
    </>
  );
};

export default CardProjectM;
