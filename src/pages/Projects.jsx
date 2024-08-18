import CardProjectM from "../components/CardProjectM";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <>
      <Navbar />
      <section className="bg-slate-100 px-8 pb-14 pt-8">
        <h2 className="mb-4 font-clashDisplay text-5xl font-bold uppercase">
          All projects
        </h2>

        <div className="max-desktopM:grid-cols-3 max-tablet:grid-cols-2 grid grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <CardProjectM key={index} project={project} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
