import Logo from "../../assets/icons/logo";

import {Call, Sms } from "iconsax-react";
import { NavLink } from "react-router-dom";
import {  heading2 } from "../../styles/text";
import AboutDropDown from "./aboutDropdown";
import ServicesDropdown from "./servicesDropdown";
import IndustryDropdown from "./industryDropdown";

function Navbar() {
  return (
    <div className="w-full bg-white z-50 sticky top-0">
      <div>
        <div className="border flex justify-between px-6 items-center ">
          <div className="">
          <Logo width={1700}/>
          </div>
          <div>
            <div className="flex">
              <Sms size="24" className="mx-1" color="#EB1C24" variant="Bold" />
              <p>prasaiprashantbabu9576@gmail.com</p>
            </div>
            <div className="flex m-1">
              <Call size="24" className="mx-1" color="#EB1C24" variant="Bold" />
              <p>9824934036</p>
            </div>
          </div>
        </div>
      </div>
      <ul className=" flex justify-center items-center border p-2">
        <div className="flex gap-[75px]">
          <NavLink to="/">
            <li className={`db:${heading2}`}>HOME</li>
          </NavLink>
          <AboutDropDown />
         <ServicesDropdown/>
         <IndustryDropdown/>
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
