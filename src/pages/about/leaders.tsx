import { Facebook } from "iconsax-react";
import { LinkedinFilled, YoutubeFilled  } from "@ant-design/icons";
import { FaSquareXTwitter } from "react-icons/fa6";

import img from "../../assets/image/team.jpg";
import prashant from "../../assets/image/img.png";
import { heading } from "../../styles/text";

function Leaders() {
  return (
    <div className="w-full relative">
      <div className="bg-blue relative h-[400px]">
        <div className="absolute top-[20%] left-[42%] transform translate(-50%, -50%) text-center text-white">
          <h1 className="text-[32px] font-medium">About</h1>
          <hr></hr>
          <h2 className="text-[48px] font-bold">Our Leaders</h2>
        </div>
        <img
          src={img}
          className="w-full h-full object-cover opacity-[20%]"
          alt="hello"
        />
      </div>
      <div className="w-full  flex flex-col items-center border">
        <div className="w-[75%]  my-8 ">
          <div className="flex gap-4">
            <div className="">
                <h1 className={`${heading}`}>CA Prashant Babu Prasai </h1>
              <p className="opacity-[.80]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                augue eget libero lacinia efficitur. In hac habitasse platea
                dictumst. Vivamus id felis et elit imperdiet ultricies. Proin
                non libero nec sapien venenatis consectetur. Suspendisse
                potenti. Vestibulum bibendum aliquet magna, sit amet venenatis
                nulla tincidunt in. Sed vel euismod arcu. Ut nec sapien ac
                libero fermentum dapibus. Duis scelerisque tellus nec odio
                consectetur vestibulum. In tincidunt felis in
                <br /> <br />
                facilisis convallis. Fusce malesuada bibendum velit, vel
                ullamcorper dui luctus vitae. Pellentesque habitant morbi
                tristique senectus et massa non malesuada tincidunt, metus dui
                fringilla nisl, sit amet interdum sapien urna a turpis. Integer
                ut quam nec felis tincidunt auctor. Sed facilisis lectus ut orci
                sagittis, nec iaculis libero bibendum. Ut vitae lacus eu dolor
                rhoncus scelerisque. Etiam non neque vel libero aliquet cursus
                eu id justo. Curabitur ac ullamcorper metus. Fusce vestibulum
                sapien id felis sagittis, vel cursus dui vehicula. Nam aliquet
                tellus in est malesuada venenatis. Nullam ac nisi nec elit
                feugiat cursus eget ac metus. Nam in ex at purus laoreet
                ultrices a id felis.
              </p>
              <div className="flex gap-5 my-4 items-center">
                <Facebook color="blue" variant="Bold" size={40} />
                <FaSquareXTwitter className=" text-[2.1rem]" />
                <LinkedinFilled className="text-[#0077b5] text-[2.1rem]" />
                <YoutubeFilled className="text-[#ff0000] text-[2.1rem]"/>
              </div>
            </div>
            <img src={prashant} className="w-[40%]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaders;
