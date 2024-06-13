import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const HeaderGreetingSection = () => {
  return (
    <>
      <div className="bgBlurBottom flex flex-col items-center bg-headerBg bg-cover bg-no-repeat pb-32 pt-2">
        <div className="mb-56">
          <Navbar />
        </div>

        <section className="w-3/4 items-center pb-44">
          <span className="outline-text pr-4 font-clashDisplay text-7xl font-extrabold uppercase">
            Hey, I'm
          </span>
          <span className="font-clashDisplay text-7xl font-extrabold uppercase">
            Anna Gofman Frontend Webdev
          </span>
          <p className="w-fit pl-12 pt-4 font-clashDisplay text-xl font-semibold hover:text-violet-500">
            <Link to={"/"}>my resume </Link>
          </p>
        </section>
      </div>
    </>
  );
};

export default HeaderGreetingSection;
