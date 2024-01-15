import CustomButton from "../../components/button/button";
import { StyledHeroSection } from "./style";
import img from "/src/assets/image/heroimg1.jpg";

function HomePage() {
  return (
    <div className="w-full">
      <div className=" w-[70%] absolute flex flex-col justify-center top-[40%] left-[15%]">
        <h1 className="text-[2.5rem] font-bold text-white">
          PRASHANT AND ASSOCIATES
        </h1>
        <p className="text-white text-[2rem] opacity-[.8]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud .
        </p>
        <div className="">
          <CustomButton color="#f8f8f8">Explore</CustomButton>
        </div>
      </div>
      <StyledHeroSection src={img} className="" alt="ktmct" />
    </div>
  );
}

export default HomePage;
