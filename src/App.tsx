import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Routing from "./routing";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routing/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
