import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-center gap-2 border-t-2 border-black bg-black px-8 py-8">
      <p className="font-clashDisplay text-xl font-semibold text-white antialiased">
        anna_gofman
      </p>

      <div className="ml-6 flex flex-row gap-4">
        <a href="https://www.linkedin.com/in/annagof/">
          <FontAwesomeIcon icon={faLinkedin} size="xl" className="text-white" />
        </a>
        <a href="https://github.com/Nostea">
          <FontAwesomeIcon icon={faGithub} size="xl" className="text-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
