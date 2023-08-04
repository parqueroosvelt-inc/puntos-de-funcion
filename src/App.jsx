import "./App.css";
import { ILF } from "./components/ILF";
import { InsertILF } from "./components/InsertILF";
import { ValuesTables } from "./components/ValuesTables";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ValuesTables />} />
        <Route path="/ilf/add" element={<InsertILF />} />
      </Routes>
    </>
  );
}

export default App;
