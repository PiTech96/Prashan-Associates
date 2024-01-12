import HomePage from "../pages/homepage";
import About from "../pages/about";

import { Routes, Route } from "react-router-dom";



function Routing() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Routing;
