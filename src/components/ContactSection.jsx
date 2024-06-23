const ContactSection = () => {
  return (
    <section className="flex flex-col pb-12">
      <div className="flex h-44 w-full flex-row items-center bg-bannerBG bg-cover bg-fixed bg-center">
        <h2 className="pl-52 font-clashDisplay text-5xl font-bold uppercase">
          Socials
        </h2>
      </div>
      <div className="ml-52 flex w-1/2 flex-col py-16">
        <h3 className="font-clashDisplay text-2xl font-bold">contact</h3>
        <div className="my-4 w-full border-b-2 border-black"></div>
        <a
          href="/"
          className="w-fit font-clashDisplay text-4xl font-bold uppercase hover:text-violet-500"
        >
          GitHub
        </a>
        <a
          href="/"
          className="w-fit font-clashDisplay text-4xl font-bold uppercase hover:text-violet-500"
        >
          Linkedin
        </a>
        <a
          href="/"
          className="w-fit font-clashDisplay text-4xl font-bold uppercase hover:text-violet-500"
        >
          @Mail
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
