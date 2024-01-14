import { useState } from "react";
import { Link } from "react-router-dom"
import { ArrowDown2} from "iconsax-react";
import { heading2 } from "../../styles/text";
;

function ServicesDropdown() {
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
        <li className={`${heading2}`}>SERVICES</li>
        <ArrowDown2 size="24" variant="Bold" color="#0A0739" />
      </button>

      {isDropdownVisible && (
        <div className="absolute w-full p-2  z-1 rounded-lg bg-white shadow w-[250px]">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <Link
              to="/audit-insurance"
              className="hover:text-primary-p10 block px-4 py-2  text-utils-u1 opacity-[.80] hover:bg-primary-p50"
            >
              <li className="">AUDIT AND ASSURANCE</li>
            </Link>
            <Link
              to="/risk-advisory"
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 opacity-[.80] hover:bg-primary-p50"
            >
              <li>RISK ADVISORY</li>
            </Link>
            <Link
              to="/tax-regulatory"
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 opacity-[.80] hover:bg-primary-p50"
            >
              <li>TAX AND REGULATORY</li>
            </Link>
            <Link
              to="/system-audit"
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 opacity-[.80] hover:bg-primary-p50"
            >
              <li>INFORMATION SYSTEM AUDIT</li>
            </Link>
            <Link
              to="/consulting"
              className="hover:text-primary-p10 block px-4 py-2 text-utils-u1 opacity-[.80] hover:bg-primary-p50"
            >
              <li>TECHNOLOGY CONSULTING AND IMPLEMENTATION</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ServicesDropdown;
