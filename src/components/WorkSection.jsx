import WorkListItem from "./WorkListItem";

const WorkSection = () => {
  return (
    <section className="mt-8 pb-16">
      <div className="flex flex-row gap-14">
        <img src="./depthPlaceholder.jpg" alt="" className="w-1/2 rounded-xl" />
        <div className="w-full pr-12">
          <div className="flew-row mt-16 flex justify-between">
            <h2 className="text-4xl font-extrabold uppercase">Work</h2>
            <p className="text-2xl">9</p>
          </div>

          <div className="w-full border-b-2 border-black py-2 pb-2"></div>

          <div className="grid grid-cols-1">
            <WorkListItem />
            <WorkListItem />
            <WorkListItem />
            <WorkListItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
