const WorkListItem = ({ project }) => {
  return (
    <div>
      <div className="flex flex-row justify-between gap-8 py-5 pb-5">
        <p>weather.io</p>
        <div className="flex flex-row flex-wrap gap-2">
          <p className="rounded-full bg-green-100 px-3 py-1 text-green-500">
            TypeScript
          </p>
          <p className="rounded-full bg-green-100 px-3 py-1 text-green-500">
            React
          </p>
        </div>
      </div>
      <div className="w-full border-b-2 border-black"></div>
    </div>
  );
};

export default WorkListItem;
