import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown2 } from "iconsax-react";
import { heading2 } from "../../styles/text";
import { StyledNav } from "./styled";

function IndustryDropdown() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div onMouseLeave={handleMouseLeave} className="relative ">
      <button
        onMouseEnter={handleMouseEnter}
        className=" text-utils hover:text-utils font-medium rounded-lg text-[1.05rem] text-center inline-flex items-center "
        type="button"
      >
        <li className={`${heading2}`}>INDUSTRY</li>
        <ArrowDown2 size="24" variant="Bold" color="#0A0739" />
      </button>

      {isDropdownVisible && (
        <StyledNav className="absolute w-full p-2  z-1 rounded-lg bg-white shadow">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <Link
              to="/enquiry"
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 opacity-[.80] hover:bg-primary-p50"
            >
              <li className="">ENQUIRY</li>
            </Link>
            <Link
              to="/news"
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 opacity-[.80] hover:bg-primary-p50"
            >
              <li>NEWS & EVENTS</li>
            </Link>
            <Link
              to="/Press-release"
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 opacity-[.80] hover:bg-primary-p50"
            >
              <li>PRESS RELEASE</li>
            </Link>
            <Link
              to="/publication"
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 opacity-[.80] hover:bg-primary-p50"
            >
              <li>PUBLICATION </li>
            </Link>
          </ul>
        </StyledNav>
      )}
    </div>
  );
}

export default IndustryDropdown;
