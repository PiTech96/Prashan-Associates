import { LinkedinFilled, TwitterCircleFilled } from "@ant-design/icons";
import Logo from "../../assets/icons/logo";
import { Facebook } from "iconsax-react";
import { Link } from "react-router-dom";
import { heading1 } from "../../styles/text";

function Footer() {
  return (
    <div className="bg-[#0A0739]">
      <div className=" w-full flex justify-center items-center py-5">
        <div className="flex w-[80%]">
          <div className="w-[40%] mb-4">
            <div className="w-[100%]">
              <Logo width={2000} />
            </div>
            <div className="flex gap-5 my-4">
              <Facebook color="white" variant="Bold" size={40} />
              <TwitterCircleFilled className="text-white text-[2.1rem]" />
              <LinkedinFilled className="text-white text-[2.1rem]" />
            </div>
          </div>
          <div className="w-[60%] flex flex-col items-center  justify-center">
            <h1 className={`${heading1} text-white mb-4`}>Quick Links</h1>
            <div className="grid grid-cols-3 gap-y-5 gap-x-10">
              <Link
                to={"/audit-insurance"}
                className="opacity-[.70] text-white hover:opacity-[100]"
              >
                Auditing Services
              </Link>
              <a
                href=""
                className="text-white opacity-[.70] hover:opacity-[100] "
              >
                Nepal Rastra Bank
              </a>
              <a
                href=""
                className="text-white opacity-[.70] hover:opacity-[100]"
              >
                Deparment Of Finance
              </a>

              <Link
                to={"/"}
                className="text-white opacity-[.70] hover:opacity-[100]"
              >
                Privacy Policy
              </Link>
              <a
                href=""
                className="text-white opacity-[.70] hover:opacity-[100] "
              >
                Company Registrar
              </a>
              <a
                href=""
                className="text-white opacity-[.70] hover:opacity-[100] "
              >
                Nepal Stock Exchange
              </a>

              <a
                href=""
                className="text-white opacity-[.70] hover:opacity-[100] "
              >
                Our Portfolio
              </a>
              <a
                href=""
                className="text-white opacity-[.70] hover:opacity-[100]"
              >
                Department of Commerce
              </a>
              <a
                href=""
                className="text-white opacity-[.70] hover:opacity-[100]"
              >
                Department Of Commerce
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 text-white flex justify-end pb-2 gap-[18rem]">
        <p> CopyRight © 2024 Prashant and associates. All Rights Reserved.</p>
        <a
          href="https://sushantbabu7.com.np/"
          className="text-right text-white mr-4"
        >
          Made by Sushant Babu Prasai
        </a>
      </div>
    </div>
  );
}

export default Footer;
