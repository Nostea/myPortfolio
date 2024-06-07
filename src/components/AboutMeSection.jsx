const AboutMeSection = () => {
  return (
    <section className="flex flex-row items-center gap-8 px-16 pb-16">
      <div className="flex flex-col pl-36">
        <h2 className="font-clashDisplay pb-4 text-6xl font-bold uppercase">
          Nice to meet you
        </h2>
        <p>
          I am a Fullstack Webdeveloper with a love for fresh 3D and design. In
          my day to day work I build websites in React & JS. I love making
          memorable user experiences. Before my dev journey I used to work as Sr
          3D Artist in the games industry.
        </p>
      </div>
      <div>
        <img
          src="/profileImg.jpg"
          alt="portrait of myself"
          className="h-[455px] w-[1265px] rounded-3xl object-cover"
        />
      </div>
    </section>
  );
};

export default AboutMeSection;
