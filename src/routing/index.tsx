import HomePage from "../pages/homepage";
// import About from "../pages/about";
import Services from "../pages/services";
import Contact from "../pages/contact";
import Portfolio  from "../pages/portfolio";
import Industry from "../pages/industry";

import { Routes, Route } from "react-router-dom";
import Frim from "../pages/about/frim";
import Values from "../pages/about/values";
import Leaders from "../pages/about/leaders";



function Routing() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} /> 
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industry" element={< Industry/>} />
          <Route path="/portfolio" element={< Portfolio/>} />
          <Route path="/frim" element={<Frim/>} />
          <Route path="/missions" element={<Values/>} />
          <Route path="/team" element={<Leaders/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default Routing;
