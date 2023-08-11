import "./App.css";
import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { CalculatePoints } from "./components/CalculatePoints";
import { VPFA } from "./components/VPFA";
import { ProtectedRoute } from "./components/utils/ProtectedRoute";

function App() {
  return (
    <>
      <div className="container-principal bg-background-fill transition-all duration-700">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vpfsa" element={<CalculatePoints />} />
          <Route
            element={
              <ProtectedRoute condition={localStorage.getItem("vpfsa-value")} />
            }
          >
            <Route path="/vpfa" element={<VPFA />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
