import { useState } from "react";
import { TIPOS_FUNCIONES } from "../constants/puntos_funcion";
import { FunctionPointType } from "./FunctionPointType";
// import { ILF_SECTION } from "./ILF";
import "./valuesTables.css";
export const ValuesTables = () => {
  const [totalPoints, setTotalPoints] = useState(0);

  const handleCalculatePoints = () => {
    let array = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      if (key !== "theme") {
        array.push(JSON.parse(value));
      }
    }
    const result = sumNumbersInArray(array);
    setTotalPoints(result);
  };

  function sumNumbersInArray(arrayOfArrays) {
    let totalSum = 0;

    for (const subArray of arrayOfArrays) {
      for (const obj of subArray) {
        totalSum += Number(obj.complexity);
      }
    }

    return totalSum;
  }

  return (
    <section className="calculate-points-container flex justify-between gap-6 w-full">
      {TIPOS_FUNCIONES.slice(0, 5).map((item) => {
        return <FunctionPointType fp={item} key={item.id} />;
      })}
      <button
        onClick={handleCalculatePoints}
        className="bg-primary boton-principal text-black"
      >
        Calcular
      </button>
      <p>Puntos VPFSA: {totalPoints}</p>
    </section>
  );
};
