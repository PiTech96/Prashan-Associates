import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Routing from "./routing";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routing/>
      </Router>
    </>
  );
}

export default App;
