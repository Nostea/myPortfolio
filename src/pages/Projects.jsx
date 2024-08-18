import CardProjectM from "../components/CardProjectM";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <>
      <Navbar />

      <div className="border-t-2 border-slate-200 bg-slate-100 px-8 pb-14 pt-8">
        <h2 className="mb-4 font-clashDisplay text-5xl font-bold uppercase max-mobile:text-3xl">
          All projects
        </h2>

        <div className="max-desktopM:grid-cols-3 max-tablet:grid-cols-2 box-border grid grid-cols-4 gap-4 max-mobile:grid-cols-1">
          {projects.map((project, index) => (
            <CardProjectM key={index} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
