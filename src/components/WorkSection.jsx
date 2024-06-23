import { useState } from "react";
import WorkListItem from "./WorkListItem.jsx";

const WorkSection = () => {
  const [previewImg, setPreviewImg] = useState("./depthPlaceholder.jpg");

  /*
<div onMouseOver={(e) => setPreviewImg("./Free2GamePreview.png")}>
              <WorkListItem />
            </div>
            <div onMouseOver={(e) => setPreviewImg("./Knapfel.png")}>
              <WorkListItem />
            </div>
            <div onMouseOver={(e) => setPreviewImg("./WeatherApp.png")}>
              <WorkListItem />
            </div>
  */

  //! mit eventlistenern die komponente neurendern? don't use useEffect

  return (
    <section className="mt-8 pb-32">
      <div className="flex flex-row gap-14">
        <div className="bg-depthPlaceHolder w-full rounded-3xl bg-cover"> </div>

        <div className="w-full pr-12">
          <div className="flew-row mt-16 flex justify-between">
            <h2 className="font-clashDisplay text-4xl font-extrabold uppercase">
              Work
            </h2>
            <p className="font-clashDisplay text-2xl">9</p>
          </div>

          <div className="w-full border-b-2 border-black py-2 pb-2"></div>

          <div className="pb-36">
            <WorkListItem />

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
