import Navbar from "./Navbar";
const HeaderGreetingSection = () => {
  return (
    <div className="flex flex-col items-center bg-headerBg bg-cover bg-no-repeat py-56">
      <Navbar />
      <section className="flex w-3/5 flex-col">
        <span className="outline-text font-clashDisplay text-4xl font-extrabold uppercase">
          Hey, I'm
        </span>
        <span className="font-clashDisplay text-4xl font-extrabold uppercase">
          Anna Gofman Frontend & Back-End Webdev
        </span>
      </section>
    </div>
  );
};

export default HeaderGreetingSection;
