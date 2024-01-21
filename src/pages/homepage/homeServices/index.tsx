import { ChartSquare } from "iconsax-react";
import { heading } from "../../../styles/text";
import { useState } from "react";
import Audit from "./audit";
import InfoAudit from "./infoAudit";
import RiskAdvisory from "./riskAdvisory";
import TechConsulting from "./techConsulting";
import Tax from "./tax";
import { StyledDiv } from "../style";

function HomeServices() {
  const [selectedServices, setSelectedServices] = useState("audit");

  function handleSelectedComponent(component: string) {
    setSelectedServices(component);
  }

  return (
    <div className="flex flex-col items-center w-full py-[5rem] ">
      <div className="w-[75%] flex flex-col items-center">
        <div className="w-[70%] flex flex-col items-center text-center ">
          <hr className="w-[60px] bg-primary h-[6px]" />
          <h1 className={`${heading}`}>Our Services</h1>
          <p>
            Our strength is ability to understand the needs of our clients and
            their business to create customized solutions and meet those
            clients’ needs. 
          </p>
        </div>
        <div className="w-full flex justify-between my-[2rem] ">
          <StyledDiv
            onClick={() => {
              handleSelectedComponent("audit");
            }}
            active={selectedServices === "audit"}
            className="flex flex-col items-center gap-[1rem] cursor-pointer"
          >
            <ChartSquare size="32" color="#EB1C24" variant="Bold" />
            <h1>AUDIT & ASSURANCE</h1>
          </StyledDiv>

          <StyledDiv
            active={selectedServices === "techConsulting"}
            className=" flex flex-col items-center gap-[1rem] cursor-pointer "
            onClick={() => {
              handleSelectedComponent("techConsulting");
            }}
          >
            <ChartSquare size="32" color="#EB1C24" variant="Bold" />
            <h1>TECHNOLOGY CONSULTING </h1>
          </StyledDiv>

          <StyledDiv
            active={selectedServices === "riskAdvice"}
            className=" flex flex-col items-center gap-[1rem] cursor-pointer"
            onClick={() => {
              handleSelectedComponent("riskAdvice");
            }}
          >
            <ChartSquare size="32" color="#EB1C24" variant="Bold" />

            <h1>RISK ADVISORY</h1>
          </StyledDiv>

          <StyledDiv
            active={selectedServices === "infoAudit"}
            className=" flex flex-col items-center gap-[1rem] cursor-pointer"
            onClick={() => {
              handleSelectedComponent("infoAudit");
            }}
          >
            <ChartSquare
              size="32"
              color="#EB1C24"
              className={``}
              variant="Bold"
            />
            <h1>INFORMATION SYSTEM AUDIT</h1>
          </StyledDiv>

          <StyledDiv
            active={selectedServices === "tax"}
            className=" flex flex-col items-center gap-[1rem] cursor-pointer  "
            onClick={() => {
              handleSelectedComponent("tax");
            }}
          >
            <ChartSquare size="32" color="#EB1C24" variant="Bold" />
            <h1>TAX & REGULATORY</h1>
          </StyledDiv>
        </div>
      </div>
      {selectedServices === "audit" && <Audit />}
      {selectedServices === "infoAudit" && <InfoAudit />}
      {selectedServices === "riskAdvice" && <RiskAdvisory />}
      {selectedServices === "techConsulting" && <TechConsulting />}
      {selectedServices === "tax" && <Tax />}
    </div>
  );
}

export default HomeServices;
