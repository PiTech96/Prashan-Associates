import img from "../../assets/image/1.jpg";
import { EyeOutlined } from "@ant-design/icons";

function Values() {
  return (
    <div className="w-full relative">
      <div className="bg-blue relative h-[400px]">
        <div className="absolute top-[35%] left-[32%] transform translate(-50%, -50%) text-center text-white flex flex-col items-center justify-center">
          <h1 className="text-[32px] font-medium">About</h1>
          <hr className="w-[15rem]"></hr>
          <h2 className="text-[42px] font-bold">Our Mission and Values</h2>
        </div>
        <img
          src={img}
          className="w-full h-full object-cover opacity-[20%]"
          alt="hello"
        />
      </div>
      <div className="w-full  flex flex-col  items-center gap-6">
        <div className="w-[75%] flex flex-col gap-4 my-6">
          <div className="w-[50%]">
            <div className="flex">
              <EyeOutlined />
              <h1 className="text-[21px]">Our mission</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              augue eget libero lacinia efficitur. In hac habitasse platea
              dictumst. Vivamus id felis et elit imperdiet ultricies. Proin non
              libero nec sapien venenatis consectetur. Suspendisse potenti.
              Vestibulum bibendum aliquet magna, sit amet venenatis nulla
              tincidunt in. Sed vel euismod arcu. Ut nec sapien ac libero
            </p>
          </div>
          <div className="self-end w-[50%]">
            <div className="flex">
              <EyeOutlined />
              <h1 className="text-[21px]">Our Vision</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              augue eget libero lacinia efficitur. In hac habitasse platea
              dictumst. Vivamus id felis et elit imperdiet ultricies. Proin non
              libero nec sapien venenatis consectetur. Suspendisse potenti.
              Vestibulum bibendum aliquet magna, sit amet venenatis nulla
              tincidunt in. Sed vel euismod arcu. Ut nec sapien ac libero
            </p>
          </div>

          <div className="w-[50%]">
            <div className="flex">
              <EyeOutlined />
              <h1 className="text-[21px] ">Our Values</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              augue eget libero lacinia efficitur. In hac habitasse platea
              dictumst. Vivamus id felis et elit imperdiet ultricies. Proin non
              libero nec sapien venenatis consectetur. Suspendisse potenti.
              Vestibulum bibendum aliquet magna, sit amet venenatis nulla
              tincidunt in. Sed vel euismod arcu. Ut nec sapien ac libero
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Values;
