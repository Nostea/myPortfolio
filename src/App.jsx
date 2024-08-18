import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Projectdetail from "./pages/Projectdetail.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projectdetail" element={<Projectdetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
