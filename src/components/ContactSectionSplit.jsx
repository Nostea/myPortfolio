const ContactSectionSplit = () => {
  return (
    <footer className="max-mobile:flex-col-reverse max-mobile:px-[0px] max-ultrawide:px-[20vw] max-mobile:pl-0 max-mobile:gap-0 flex flex-row items-center justify-center gap-16 pl-[16vw]">
      <div className="max-mobile:mb-[10vh] flex flex-col">
        <a
          href="/"
          className="max-mobile:text-4xl w-fit font-clashDisplay text-6xl font-bold uppercase hover:text-violet-500"
        >
          GitHub
        </a>
        <a
          href="/"
          className="max-mobile:text-4xl w-fit font-clashDisplay text-6xl font-bold uppercase hover:text-violet-500"
        >
          Linkedin
        </a>
        <a
          href="/"
          className="max-mobile:text-4xl w-fit font-clashDisplay text-6xl font-bold uppercase hover:text-violet-500"
        >
          Email
        </a>
      </div>
      <div className="max-mobile:mb-[5vh] flex h-[40vh] w-full flex-row items-center justify-center bg-bannerBG bg-cover bg-fixed bg-center">
        <h2 className="px-8 font-clashDisplay text-5xl font-bold uppercase">
          Socials
        </h2>
      </div>
    </footer>
  );
};

export default ContactSectionSplit;
