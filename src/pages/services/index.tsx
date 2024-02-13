import React, { useState, useEffect } from "react";
import img from "../../assets/image/1.jpg";
import { heading2 } from "../../styles/text";
import { StyledCard, StyledSelect, StyledInput } from "./style";
import CustomButton from "../../components/button/button";
import { Award } from "iconsax-react";
import services from "./services.json";

function OurServices() {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleMouseEnter = (index: number) => {
    setHoveredCardIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredCardIndex(null);
  };

  useEffect(() => {
    // Cleanup when component unmounts
    return () => setHoveredCardIndex(null);
  }, []);

  const handleRequestQuote = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your request was saved!!");
  };

  return (
    <div className="w-full relative">
      <div className="bg-blue relative h-[400px]">
        <div className="absolute top-[30%] left-[42%] transform translate(-50%, -50%) text-center text-white">
          <h1 className="text-[32px] font-semibold">Our Services</h1>
          <hr></hr>
        </div>
        <img
          src={img}
          className="w-full h-full object-cover opacity-[20%]"
          alt="hello"
        />
      </div>
      <div className="w-full flex flex-col items-center border">
        <div className="grid grid-cols-3 w-[90%]">
          {services.map((item, index) => (
            <StyledCard
              key={index}
              className=""
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {hoveredCardIndex === index ? (
                <div className="w-full bg-primary">
                  {item.services.map((service, serviceIndex) => (
                    <div key={serviceIndex}>
                      <h3>{service.name}</h3>
                      <p>{service.details}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <div className="felx justify-center w-[58px] h-[58px] items-center rounded-[50%] p-[13px]">
                    <Award size="32" variant="Bulk" color="#FF8A65" />
                  </div>
                  <div className="text-center flex flex-col gap-[10px] p-4">
                    <h2 className={`${heading2} font-`}>{item.title}</h2>
                    <p className="text-utils-u1 opacity-[0.7]">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </StyledCard>
          ))}
        </div>
        <h1 className="text-[21px] mt-6 mb-2">Request a Quote</h1>
        <div className="w-full flex justify-center items-cen">
          <form onSubmit={handleRequestQuote} className=" w-[45%] mb-10">
            <div className="flex rounded-[8px]">
              <StyledInput
                data-aos="fade-right"
                type="text"
                name="Email"
                placeholder="Enter your email address..."
                className="opacity-[.70]"
                required
              />
              <StyledSelect
                variant="filled"
                mode="multiple"
                className=""
                placeholder="select a service"
                options={[
                  { value: "audit", label: "Audit" },
                  { value: "tax", label: "Tax" },
                  { value: "Risk Advisory", label: "Risk Advisory" },
                  {
                    value: "Technology Consulting",
                    label: "Technology Consulting",
                  },
                  { value: "Info System Audit", label: "Info System Audit" },
                ]}
              />
            </div>
            <CustomButton type="submit" className="mt-2 py-[100px]">
              Request
            </CustomButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
