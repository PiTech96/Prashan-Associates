import img from "../../assets/image/1.jpg";
import { heading2 } from "../../styles/text";
import { Award } from "iconsax-react";
import { StyledCard } from "./style";

function OurServices() {
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
      <div className="w-full  flex flex-col items-center border">
        <div className="grid grid-cols-3 w-[90%]">
          <StyledCard className="">
            <div className=" felx justify-center  w-[58px] h-[58px] items-center rounded-[50%] p-[13px]">
              <Award size="32" variant="Bulk" color="#FF8A65" />
            </div>
            <div className="text-center flex flex-col gap-[10px] p-4">
              <h2 className={`${heading2} font-`}>Award Wining services</h2>
              <p className="text-utils-u1 opacity-[0.7]">
                Empower your online presence through our expert web development.
              </p>
            </div>
          </StyledCard>
          <StyledCard className="">
            <div className=" felx justify-center  w-[58px] h-[58px] items-center rounded-[50%] p-[13px]">
              <Award size="32" variant="Bulk" color="#FF8A65" />
            </div>
            <div className="text-center flex flex-col gap-[10px] p-4">
              <h2 className={`${heading2} font-`}>Award Wining services</h2>
              <p className="text-utils-u1 opacity-[0.7]">
                Empower your online presence through our expert web development.
              </p>
            </div>
          </StyledCard>
          <StyledCard className="   ">
            <div className=" felx justify-center  w-[58px] h-[58px] items-center rounded-[50%] p-[13px]">
              <Award size="32" variant="Bulk" color="#FF8A65" />
            </div>
            <div className="text-center flex flex-col gap-[10px] p-4">
              <h2 className={`${heading2} font-`}>Award Wining services</h2>
              <p className="text-utils-u1 opacity-[0.7]">
                Empower your online presence through our expert web development.
              </p>
            </div>
          </StyledCard>
          <StyledCard className="   ">
            <div className=" felx justify-center  w-[58px] h-[58px] items-center rounded-[50%] p-[13px]">
              <Award size="32" variant="Bulk" color="#FF8A65" />
            </div>
            <div className="text-center flex flex-col gap-[10px] p-4">
              <h2 className={`${heading2} font-`}>Award Wining services</h2>
              <p className="text-utils-u1 opacity-[0.7]">
                Empower your online presence through our expert web development.
              </p>
            </div>
          </StyledCard>
          <StyledCard className="   ">
            <div className=" felx justify-center  w-[58px] h-[58px] items-center rounded-[50%] p-[13px]">
              <Award size="32" variant="Bulk" color="#FF8A65" />
            </div>
            <div className="text-center flex flex-col gap-[10px] p-4">
              <h2 className={`${heading2} font-`}>Award Wining services</h2>
              <p className="text-utils-u1 opacity-[0.7]">
                Empower your online presence through our expert web development.
              </p>
            </div>
          </StyledCard>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
