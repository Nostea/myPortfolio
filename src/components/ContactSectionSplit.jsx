const ContactSectionSplit = () => {
  return (
    <footer className="flex flex-row items-center justify-center gap-16 pl-[16vw] max-ultrawide:px-[20vw] max-mobile:flex-col-reverse max-mobile:gap-0 max-mobile:px-[0px] max-mobile:pl-0">
      <div className="flex flex-col max-mobile:mb-[10vh]">
        <a
          href="https://github.com/Nostea"
          className="w-fit font-clashDisplay text-6xl font-bold uppercase hover:text-violet-500 max-mobile:text-4xl"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/annagof/"
          className="w-fit font-clashDisplay text-6xl font-bold uppercase hover:text-violet-500 max-mobile:text-4xl"
        >
          Linkedin
        </a>
        <a
          href="/"
          className="w-fit font-clashDisplay text-6xl font-bold uppercase hover:text-violet-500 max-mobile:text-4xl"
        >
          anna@gofman.eu
        </a>
      </div>
      <div className="flex h-[40vh] w-full flex-row items-center justify-center bg-bannerBG bg-cover bg-fixed bg-center max-mobile:mb-[5vh]">
        <h2 className="px-8 font-clashDisplay text-5xl font-bold uppercase">
          Socials
        </h2>
      </div>
    </footer>
  );
};

export default ContactSectionSplit;
