import { heading, heading2 } from "../../styles/text";
import { Award } from "iconsax-react";
import { StyledCard } from "./style";

function ChooseUs() {
  return (
    <div className="w-full flex flex-col items-center my-[5rem]">
      <div className="w-[75%] flex flex-col items-center">
        <div className="mb-[4rem]">
          <h1 className={`${heading}`}>Why Choose Us?</h1>
        </div>
        <div className="flex gap-8 w-[90%]">
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
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
