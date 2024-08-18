import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Pill from "../components/Pill";

const Projectdetail = () => {
  const params = useParams();
  const projectTitle = params.projectTitle;
  const project = projects.find((p) => p.title === projectTitle);
  console.log(project);
  return (
    <>
      <Navbar />

      <section className="flex h-fit flex-col bg-gray-100 px-[5vw] py-8 max-mobile:h-fit">
        <div className="mb-8 grid grid-cols-2 items-center gap-8 overflow-hidden rounded-lg bg-white max-mobile:grid-cols-1 max-mobile:gap-2">
          <img
            src={project.titleImg}
            alt={project.alt}
            className="w-full max-mobile:h-96 max-mobile:object-cover max-mobile:object-center"
          />
          <div className="flex flex-col p-6">
            <h2 className="mb-4 font-clashDisplay text-4xl font-semibold antialiased">
              {project.title}
            </h2>

            <div className="mb-4 flex flex-row flex-wrap gap-2">
              {project.skills.map((skill, skillIndex) => (
                <Pill text={skill} />
              ))}
            </div>
            <p className="mb-8 antialiased">{project.description}</p>

            <div className="ml-12 flex flex-col gap-1 max-mobile:flex-row max-mobile:gap-8">
              <a
                href={project.site}
                target="_blank"
                className="font-clashDisplay hover:text-violet-400"
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  size="lg"
                  className="pr-2"
                />{" "}
                live demo
              </a>
              <a
                href={project.repo}
                target="_blank"
                className="font-clashDisplay hover:text-violet-400"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" className="pr-2" />{" "}
                GitHub Repo
              </a>
            </div>
          </div>
        </div>

        <div className="mx-16 grid grid-flow-col-dense gap-8">
          {project.galleryImgs.map((galleryImg, galleryImgIndex) => (
            <img src={galleryImg} alt="" />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projectdetail;
