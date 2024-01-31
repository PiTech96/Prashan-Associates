import img from "../../assets/image/1.jpg";
import img1 from "../../assets/image/2.jpg";

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
      <div className="w-full  flex flex-col items-center border">
        <div className="w-[80%]  mt-8">
          <div className="flex">
            <p className="w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              augue eget libero lacinia efficitur. In hac habitasse platea
              dictumst. Vivamus id felis et elit imperdiet ultricies. Proin non
              libero nec sapien venenatis consectetur. Suspendisse potenti.
              Vestibulum bibendum aliquet magna, sit amet venenatis nulla
              tincidunt in. Sed vel euismod arcu. Ut nec sapien ac libero
              fermentum dapibus. Duis scelerisque tellus nec odio consectetur
              vestibulum. In tincidunt felis in
              <br /> <br />
              facilisis convallis. Fusce malesuada bibendum velit, vel
              ullamcorper dui luctus vitae. Pellentesque habitant morbi
              tristique senectus et massa non malesuada tincidunt, metus dui
              fringilla nisl, sit amet interdum sapien urna a turpis. Integer ut
              quam nec felis tincidunt auctor. Sed facilisis lectus ut orci
              sagittis, nec iaculis libero bibendum. Ut vitae lacus eu dolor
              rhoncus scelerisque. Etiam non neque vel libero aliquet cursus eu
              id justo. Curabitur ac ullamcorper metus. Fusce vestibulum sapien
              id felis sagittis, vel cursus dui vehicula. Nam aliquet tellus in
              est malesuada venenatis. Nullam ac nisi nec elit feugiat cursus
              eget ac metus. Nam in ex at purus laoreet ultrices a id felis.
            </p>
            <img src={img1} className="w-1/2  " alt="" />
          </div>
          <p className="my-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            augue eget libero lacinia efficitur. In hac habitasse platea
            dictumst. Vivamus id felis et elit imperdiet ultricies. Proin non
            libero nec sapien venenatis consectetur. Suspendisse potenti.
            Vestibulum bibendum aliquet magna, sit amet venenatis nulla
            tincidunt in. Sed vel euismod arcu. Ut nec sapien ac libero
            fermentum dapibus. Duis scelerisque tellus nec odio consectetur
            vestibulum. In tincidunt felis in
            <br />
            facilisis convallis. Fusce malesuada bibendum velit, vel ullamcorper
            dui luctus vitae. Pellentesque habitant morbi tristique senectus et
            massa non malesuada tincidunt, metus dui fringilla nisl, sit amet
            interdum sapien urna a turpis. Integer ut quam nec felis tincidunt
            auctor. Sed facilisis lectus ut orci sagittis, nec iaculis libero
            bibendum. Ut vitae lacus eu dolor rhoncus scelerisque. Etiam non
            neque vel libero aliquet cursus eu id justo. Curabitur ac
            ullamcorper metus. Fusce vestibulum sapien id felis sagittis, vel
            cursus dui vehicula. Nam aliquet tellus in est malesuada venenatis.
            Nullam ac nisi nec elit feugiat cursus eget ac metus. Nam in ex at
            purus laoreet ultrices a id felis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Values;
