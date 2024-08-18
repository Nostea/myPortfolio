import CardProjectM from "../components/CardProjectM";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Projects = () => {
  return (
    <>
      <Navbar />
      <section className="bg-slate-100 px-8 pb-14 pt-8">
        <h2 className="mb-4 font-clashDisplay text-5xl font-bold uppercase">
          All projects
        </h2>

        <div className="grid grid-cols-3 gap-4 max-mobile:grid-cols-2">
          <CardProjectM />
          <CardProjectM />
          <CardProjectM />
          <CardProjectM />
          <CardProjectM />
          <CardProjectM />
          <CardProjectM />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
