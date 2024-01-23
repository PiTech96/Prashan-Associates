import { heading, heading1, paragraph } from "../../styles/text";
import { ClipboardTick } from "iconsax-react";

function HomeAboutUs() {
  return (
    <div className="w-full flex flex-col items-center mb-10">
      <div className="w-[75%] flex gap-10">
        <div className="w-[52%]">
          <h3 className={`${heading1} text-primary`}>About</h3>
          <h1 className={`${heading}`}>
            The Best Business Solution With Handfull of Experience
          </h1>
          <p className={`${paragraph}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="flex items-center">
              <ClipboardTick size="32" color="#FF8A65" variant="Bulk" />
              <h4>Award Wining</h4>
            </div>
            <div className="flex">
              <ClipboardTick size="32" color="#FF8A65" variant="Bulk" />
              <h4>24/7 Support</h4>
            </div>
            <div className="flex">
              <ClipboardTick size="32" color="#FF8A65" variant="Bulk" />
              <h4>Professional Team</h4>
            </div>
            <div className="flex">
              <ClipboardTick size="32" color="#FF8A65" variant="Bulk" />
              <h4>Quality Service</h4>
            </div>
          </div>
        </div>
        <div className="w-[46%] border border-black bg-[#333]">
          <img src="" className="" alt="myimg" />
        </div>
      </div>
    </div>
  );
}

export default HomeAboutUs;
