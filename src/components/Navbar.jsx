import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between gap-2 border-slate-400 px-12 py-6">
      <Link
        to="/"
        className="font-clashDisplay text-4xl font-semibold antialiased"
      >
        AG
      </Link>
      <div>
        <div className="flex flex-row gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-clashDisplay text-xl antialiased ${isActive ? "bg-yellow-100" : undefined}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `font-clashDisplay text-xl antialiased ${isActive ? "bg-yellow-100" : undefined}`
            }
          >
            Projects
          </NavLink>
          <div className="ml-8 flex flex-row gap-2">
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
