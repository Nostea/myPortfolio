import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const Projectdetail = () => {
  return (
    <>
      <Navbar />

      <section className="flex h-fit flex-col bg-gray-100 px-[5vw] py-8 max-mobile:h-fit">
        <div className="mb-8 grid grid-cols-2 items-center gap-8 overflow-hidden rounded-lg bg-white max-mobile:grid-cols-1 max-mobile:gap-2">
          <img
            src="/depthPlaceholder.jpg"
            alt=""
            className="w-full max-mobile:h-96 max-mobile:object-cover max-mobile:object-center"
          />
          <div className="flex flex-col p-6">
            <h2 className="mb-4 font-clashDisplay text-4xl font-semibold antialiased">
              Pokedex App
            </h2>

            <div className="mb-4 flex flex-row flex-wrap gap-2">
              <p className="w-fit rounded-full bg-green-100 px-3 py-1 text-green-500 max-mobile:text-sm max-mobile:font-light">
                React
              </p>
              <p className="w-fit rounded-full bg-green-100 px-3 py-1 text-green-500 max-mobile:text-sm max-mobile:font-light">
                JavaScript
              </p>
              <p className="w-fit rounded-full bg-green-100 px-3 py-1 text-green-500 max-mobile:text-sm max-mobile:font-light">
                Node.js
              </p>
              <p className="w-fit rounded-full bg-green-100 px-3 py-1 text-green-500 max-mobile:text-sm max-mobile:font-light">
                TailwindCSS
              </p>
            </div>
            <p className="mb-8 antialiased">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              temporibus obcaecati? Ipsum sit beatae quo ad at accusantium
              tenetur voluptatibus minus autem distinctio voluptate molestiae
              esse, maxime, labore numquam! Ipsam excepturi sint iste inventore,
              labore sit qui accusamus, veniam nemo velit voluptate deserunt
              molestias officiis nobis possimus quae a dolorem.
            </p>

            <div className="ml-12 flex flex-col gap-1 max-mobile:flex-row max-mobile:gap-8">
              <a
                href="https://free2-game-v2.vercel.app/"
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
                href="https://github.com/Nostea/free2GameV2"
                className="font-clashDisplay hover:text-violet-400"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" className="pr-2" />{" "}
                GitHub Repo
              </a>
            </div>
          </div>
        </div>

        <div className="mx-16 grid grid-flow-col-dense gap-8">
          <img src="/pokedex-screenshot.png" alt="" />
          <img src="/pokedex-screenshot.png" alt="" />
          <img src="/pokedex-screenshot.png" alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projectdetail;
