import { NavLink } from "react-router-dom";
import DarkmodeIcon from "./icons/DarkmodeIcon";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between gap-2 px-12 py-4">
      <p>anna@email.eu</p>
      <div className="fley-row flex gap-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <div className="hover:fill-violet-600">
          <DarkmodeIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
