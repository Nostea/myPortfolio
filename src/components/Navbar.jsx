import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between gap-2 px-12 py-6 max-mobile:px-4 max-mobile:py-4">
      <Link
        to="/"
        className="font-clashDisplay text-4xl font-semibold antialiased max-mobile:text-3xl"
      >
        AG
      </Link>
      <div>
        <div className="flex flex-row gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-clashDisplay text-xl antialiased hover:text-violet-400 max-mobile:text-lg ${isActive ? "border-b-2 border-green-400" : undefined}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `font-clashDisplay text-xl antialiased hover:text-violet-400 max-mobile:text-lg ${isActive ? "border-b-2 border-green-400" : undefined}`
            }
          >
            Projects
          </NavLink>
          <div className="ml-8 flex flex-row gap-2 max-mobile:gap-4">
            <a
              href="https://www.linkedin.com/in/annagof/"
              className="hover:text-violet-500"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a
              href="https://github.com/Nostea"
              className="hover:text-violet-500"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
