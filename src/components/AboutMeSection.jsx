import { Link } from "react-router-dom";

const AboutMeSection = () => {
  return (
    <section className="flex flex-row items-end justify-center gap-8 px-16 pb-[15vh] max-mobile:flex-col-reverse max-mobile:gap-8 max-mobile:px-4">
      <div className="flew-row flex items-end gap-2 max-mobile:mx-6 max-mobile:flex-col-reverse max-mobile:items-center max-mobile:gap-2">
        <div className="mb-16 flex w-[40vw] flex-col max-mobile:w-full">
          <h2 className="pb-4 font-clashDisplay text-6xl font-bold uppercase max-mobile:text-5xl">
            Nice to meet you
          </h2>
          <p className="pb-4">
            I am Berlin based Frontend developer with a love for interactive 3D
            and design. In my day to day work I build websites in React & JS. I
            love making memorable user experiences that make your life easier.
          </p>
          <p>
            Before my dev journey I used to work as Sr 3D Artist in the games
            industry.
          </p>
          <p className="w-fit pl-12 pt-8 font-clashDisplay text-xl font-semibold hover:text-violet-500">
            <a
              href="/AnnaGofmanPortfolio_DE.pdf"
              download
              className="flex flex-row justify-center gap-2"
            >
              <img src="/flag-DE.svg" className="w-5" alt="flag DE" />
              my resume ⟶
            </a>
          </p>
        </div>
        <svg
          width="71"
          height="47"
          viewBox="0 0 71 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.072 24.9999H0.84V0.423939H32.072V24.9999ZM10.824 46.2479H1.992V31.3999H10.056C11.592 31.3999 12.7013 31.1013 13.384 30.5039C14.152 29.9066 14.536 28.6693 14.536 26.7919V22.0559H32.072V26.6639C32.072 33.2346 30.1947 38.1413 26.44 41.3839C22.7707 44.6266 17.5653 46.2479 10.824 46.2479ZM70.947 24.9999H39.715V0.423939H70.947V24.9999ZM49.699 46.2479H40.867V31.3999H48.931C50.467 31.3999 51.5763 31.1013 52.259 30.5039C53.027 29.9066 53.411 28.6693 53.411 26.7919V22.0559H70.947V26.6639C70.947 33.2346 69.0697 38.1413 65.315 41.3839C61.6457 44.6266 56.4403 46.2479 49.699 46.2479Z"
            fill="#3FD7B2"
          />
        </svg>
      </div>

      <div className="max-mobile:m-auto">
        <img
          src="/profileImg.jpg"
          alt="portrait of myself"
          className="h-[455px] w-96 rounded-3xl object-cover object-center max-mobile:h-[300px] max-mobile:w-[250px]"
        />
      </div>
    </section>
  );
};

export default AboutMeSection;
