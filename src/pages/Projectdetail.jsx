import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Pill from "../components/Pill";

const Projectdetail = () => {
  const params = useParams();
  const projectTitle = params.projectTitle;
  const project = projects.find((p) => p.title === projectTitle);
  return (
    <>
      <Navbar />

      <section className="flex flex-col border-t-2 border-slate-200 bg-slate-100 px-[5vw] pb-32 pt-8 max-mobile:h-fit">
        <div className="mb-16 grid grid-cols-2 items-center gap-8 overflow-hidden rounded-lg bg-white max-mobile:grid-cols-1 max-mobile:gap-2">
          <img
            src={project.titleImg}
            alt={project.alt}
            className="min-h-[60vh] object-cover object-left max-tablet:object-left"
          />
          <div className="flex flex-col p-6">
            <h2 className="mb-4 font-clashDisplay text-4xl font-semibold antialiased">
              {project.title}
            </h2>

            <div className="mb-4 flex flex-row flex-wrap gap-2">
              {project.skills.map((skill, skillIndex) => (
                <Pill key={skillIndex} text={skill} />
              ))}
            </div>
            <p className="mb-8 antialiased">{project.description}</p>

            <div className="flex flex-row gap-2 max-mobile:gap-4">
              <a
                href={project.site}
                target="_blank"
                className="flex flex-row items-center gap-2 rounded bg-green-100 px-2 py-1 font-clashDisplay text-sm antialiased"
              >
                <FontAwesomeIcon icon={faGlobe} /> visit
              </a>
              <a
                href={project.repo}
                target="_blank"
                className="flex flex-row items-center rounded border-[1px] border-black px-2 py-1 font-clashDisplay text-sm antialiased"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" className="pr-2" />{" "}
                GitHub
              </a>
            </div>
          </div>
        </div>

        <h2 className="mb-6 border-b-2 border-dotted border-slate-200 pb-2 text-center font-clashDisplay text-3xl font-semibold uppercase antialiased max-mobile:text-xl">
          Gallery
        </h2>
        <div className="mx-16 grid grid-cols-2 gap-8 max-desktopM:mx-6 max-tablet:grid-cols-1">
          {project.galleryImgs.map((galleryImg, galleryImgIndex) => (
            <img
              key={galleryImgIndex}
              src={galleryImg}
              className="rounded-lg"
              alt=""
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projectdetail;
