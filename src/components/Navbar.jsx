import { NavLink } from "react-router-dom";
import DarkmodeIcon from "./icons/DarkmodeIcon";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between gap-2 px-12 py-4">
      <p>anna@gofman.eu</p>
      <div className="flex flex-row gap-2">
        {/*
          <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
          */}

        <DarkmodeIcon />
      </div>
    </nav>
  );
};

export default Navbar;
