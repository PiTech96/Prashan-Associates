import { ChartSquare } from "iconsax-react";
import { heading } from "../../styles/text";

function HomeServices() {
  return (
    <div className="flex flex-col items-center border border-[3px] border-[#333] w-full py-[5rem] ">
      <div className="border border-[#111] w-[70%] flex flex-col items-center">
        <div className="w-[70%] flex flex-col items-center text-center ">
          <hr className="w-[60px] bg-primary h-[6px]" />
          <h1 className={`${heading}`}>Our Services</h1>
          <p>
            Our strength is ability to understand the needs of our clients and
            their business to create customized solutions and meet those
            clients’ needs. 
          </p>
        </div>
        <div className="w-full flex justify-between my-[1rem]">
          <div className=" flex flex-col items-center gap-[1rem]">
            <ChartSquare size="32" color="#EB1C24" variant="Bold" />
            <h1>AUDIT & ASSURANCE</h1>
          </div>
          <div className=" flex flex-col items-center gap-[1rem] ">
            <ChartSquare size="32" color="#EB1C24" variant="Bold" />
            <h1>TECHNOLOGY CONSULTING </h1>
          </div>
          <div className=" flex flex-col items-center gap-[1rem] ">
            <ChartSquare size="32" color="#EB1C24" variant="Bold" />
            <h1>RISK ADVISORY</h1>
          </div>
          <div className=" flex flex-col items-center gap-[1rem]">
            <ChartSquare size="32" color="#EB1C24" variant="Bold" />
            <h1>INFORMATION SYSTEM AUDIT</h1>
          </div>
          <div className=" flex flex-col items-center gap-[1rem]">
            <ChartSquare size="32" color="#EB1C24" variant="Bold" />
            <h1>TAX & REGULATORY</h1>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default HomeServices;
