import { useState } from "react";
import { FunctionPointType } from "./FunctionPointType";
import { Link } from "react-router-dom";
import { TIPOS_FUNCIONES } from "../constants/puntos_funcion";
import "./valuesTables.css";

export const ValuesTables = () => {
  const [totalPoints, setTotalPoints] = useState(
    localStorage.getItem("vpfsa-value") || 0
  );

  const handleCalculatePoints = () => {
    let array = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      const legibleKey = key.split("_")[0];
      if (legibleKey === "All") {
        array.push(JSON.parse(value));
      }
    }
    const result = sumNumbersInArray(array);
    localStorage.setItem("vpfsa-value", result);
    setTotalPoints(result);
  };

  function sumNumbersInArray(arrayOfArrays) {
    let totalSum = 0;

    for (const subArray of arrayOfArrays) {
      for (const obj of subArray) {
        totalSum += Number(obj.value);
      }
    }

    return totalSum;
  }

  return (
    <section className="calculate-points-container flex justify-between gap-6 w-full">
      {TIPOS_FUNCIONES.slice(0, 5).map((item) => {
        return (
          <FunctionPointType
            handleCalculatePoints={handleCalculatePoints}
            fp={item}
            key={item.id}
          />
        );
      })}
      <p className="text-left">
        Puntos VPFSA:{" "}
        <span className="text-primary font-semibold">{totalPoints}</span>
      </p>
      <div className="flex justify-center gap-3 items-center">
        <Link
          to="/"
          className="w-full bg-secondary boton-secundario text-baseColor"
        >
          Atras
        </Link>
        <Link
          onClick={handleCalculatePoints}
          to="/vpfa"
          className="w-full bg-primary boton-principal text-black"
        >
          Siguiente
        </Link>
      </div>
    </section>
  );
};
