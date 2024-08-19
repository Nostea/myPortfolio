import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import {
  faEnvelope,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
const HeaderGreetingSection = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-headerBg bg-top bg-no-repeat max-mobile:pb-12">
        <div className="mb-[10vh] w-full">
          <Navbar />
        </div>

        <section className="flex-rows mx-[10vw] mb-12 flex items-center justify-items-center gap-8 max-mobile:mb-[5vh] max-mobile:flex-col-reverse">
          <div className="">
            <p className="mb-8 font-clashDisplay text-7xl font-semibold leading-none tracking-wide antialiased max-mobile:text-center max-mobile:text-4xl">
              Hey there! <br /> I'm Anna Gofman
            </p>
            <p className="mb-8 text-xl antialiased max-mobile:mb-6 max-mobile:text-lg">
              Berlin based web developer building awesome websites.
            </p>

            <div className="flex flex-row gap-12 max-mobile:flex-row max-mobile:items-center max-mobile:justify-center max-mobile:gap-8">
              <a
                href="/AnnaGofman_CV_DE.pdf"
                download
                className="flex h-14 w-fit flex-row items-center pb-2 font-clashDisplay text-xl font-medium antialiased transition-all duration-75 ease-in-out hover:border-b-2 hover:border-green-400 max-mobile:text-lg"
              >
                Resume
                <img
                  src="/flag-DE.svg"
                  alt="german"
                  className="h-[1.5rem] pl-4"
                />
              </a>
              <a
                className="flex h-14 w-fit flex-row items-center justify-center pb-2 font-clashDisplay text-xl font-medium antialiased transition-all duration-75 ease-in-out hover:border-b-2 hover:border-green-400 max-mobile:text-lg"
                href="mailto:anna@gofman.eu"
              >
                Contact me
                <FontAwesomeIcon icon={faEnvelope} className="pl-3" size="lg" />
              </a>
            </div>
          </div>
          <img
            src="/AnnaProfilbildHochkant.jpg"
            alt="portrait of myself"
            className="max-w-[300px] rounded-3xl object-cover object-center max-mobile:h-[150px] max-mobile:w-[150px] max-mobile:rounded-full max-mobile:object-cover"
          />
        </section>
      </div>
    </>
  );
};

export default HeaderGreetingSection;
