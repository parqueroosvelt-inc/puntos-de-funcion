import "./App.css";
import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { CalculatePoints } from "./components/CalculatePoints";
import { VPFA } from "./components/VPFA";
import { ProtectedRoute } from "./components/utils/ProtectedRoute";
import { EstimacionEsfuerzo } from "./components/EstimacionEsfuerzo";
import { FinalResults } from "./components/FinalResults";

function App() {
  return (
    <>
      <div className="container-principal">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vpfsa" element={<CalculatePoints />} />
          <Route element={<ProtectedRoute value={"vpfsa"} />}>
            <Route path="/vpfa" element={<VPFA />} />
          </Route>
          <Route element={<ProtectedRoute value={"vpfsa"} />}>
            <Route
              path="/estimacion_esfuerzo"
              element={<EstimacionEsfuerzo />}
            />
          </Route>
          <Route element={<ProtectedRoute value={"vpfsa"} />}>
            <Route path="/results" element={<FinalResults />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
