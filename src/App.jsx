import "./App.css";
import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { CalculatePoints } from "./components/CalculatePoints";

function App() {
  return (
    <>
      <div className="container-principal bg-background-fill transition-all duration-700">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<CalculatePoints />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
