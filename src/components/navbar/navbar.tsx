import Logo from "../../assets/icons/logo";

import { ArrowDown2 } from "iconsax-react";
import { NavLink } from "react-router-dom";
import { heading2 } from "../../styles/text";

function Navbar() {
  return (
    <div>
      <ul className="flex justify-between items-center border p-2  px-14">
        <div>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div className="flex gap-[50px]">
          <NavLink to="/">
            <li className={`${heading2}`}>HOME</li>
          </NavLink>
          <NavLink to="/about" className="flex">
            <li className={`${heading2}`}>ABOUT US</li>
            <ArrowDown2 size="24" variant="Bold" color="#0A0739" />
          </NavLink>
          <NavLink to="/services" className="flex">
            <li className={`${heading2}`}>SERVICES</li>
            <ArrowDown2 size="24" variant="Bold" color="#0A0739" />
          </NavLink>
          <NavLink to="/industry" className="flex">
            <li className={`${heading2}`}>INDUSTRY </li>
            <ArrowDown2 size="24" variant="Bold" color="#0A0739" />
          </NavLink>
          <NavLink to="/portfolio">
            <li className={`${heading2}`}>PORTFOLIO</li>
          </NavLink>
          <NavLink to="/contact">
            <li className={`${heading2}`}>CONTACT</li>
          </NavLink>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
