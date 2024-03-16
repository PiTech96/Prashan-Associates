import industry from "../../assets/image/industryfinal.jpg";
function Industry() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div>
          <h1 className="absolute left-[35%] top-1/3  font-bold  text-[#fff] text-[3rem]">
            INDUSTRIES OVERVIEW
          </h1>
          <img className="" src={industry} alt="my-industries" />
        </div>
        <div className="w-[75%] m-4">
          <p className="text-[18px] opacity-[90%]">
            We have a client base across diverse sectors. Our understanding of
            the local economy, regulations and markets gives us an edge in
            providing world-class services to our clients. We help them navigate
            through various challenges and help them build up a foundation t hat
            lasts. We have a client base across diverse sectors. Our
            understanding of the local economy, regulations and markets gives us
            an edge in providing world-class services to our clients. We help
            them navigate through various challenges and help them build up a
            foundation t hat lasts.
          </p>
          <br />  
          <p className="text-[18px] opacity-[90%]">
            Our cliente mainly includes enterprises ranging from publicly listed
            entities/multinational companies to medium/large private companies.
            The sectors we serve are enumerated below: Our cliente mainly
            includes enterprises ranging from publicly listed
            entities/multinational companies to medium/large private companies.
            The sectors we serve are enumerated below:
          </p>
        </div>
      </div>
    </div>
  );
}

export default Industry;
