const ContactSection = () => {
  return (
    <footer className="flex flex-row items-center justify-center">
      <div className="flex h-44 w-full flex-row items-center bg-bannerBG bg-cover bg-fixed bg-center">
        <h2 className="pl-52 font-clashDisplay text-5xl font-bold uppercase">
          Socials
        </h2>
      </div>
      <div className="ml- flex w-1/2 flex-col">
        <a
          href="https://github.com/Nostea"
          className="w-fit font-clashDisplay text-4xl font-bold uppercase hover:text-violet-500"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/annagof/"
          className="w-fit font-clashDisplay text-4xl font-bold uppercase hover:text-violet-500"
        >
          Linkedin
        </a>
        <a
          href="/"
          className="w-fit font-clashDisplay text-4xl font-bold uppercase hover:text-violet-500"
        >
          anna@gofman.eu
        </a>
      </div>
    </footer>
  );
};

export default ContactSection;
