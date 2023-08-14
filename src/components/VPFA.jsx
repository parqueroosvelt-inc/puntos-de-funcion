import { useState } from "react";
import { NIVELES_INFLUENCIA } from "../constants/nivelesDeInfluencia";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const VPFA = () => {
  const [result, setResult] = useState(
    localStorage.getItem("influencepoints-value") || 0
  );

  const evaluatePoints = () => {
    handleSubmit();
  };

  const handleSubmit = () => {
    let array = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      const legibleKey = key.split("/")[0];
      if (legibleKey === "IP") {
        array.push(JSON.parse(value));
      }
    }
    const resultado = sumNumbersInArray(array);
    localStorage.setItem("influencepoints-value", resultado);
    setResult(resultado);
    handleCalculateVPFA();
  };

  function sumNumbersInArray(array) {
    let totalSum = 0;

    for (const value of array) {
      totalSum += Number(value);
    }
    return totalSum;
  }

  const handleCalculateVPFA = () => {
    const VPFSA = Number(localStorage.getItem("vpfsa-value"));
    const factorDeAjuste = Number(
      localStorage.getItem("influencepoints-value")
    );

    const VPFA = Math.round(VPFSA * [0.01 * factorDeAjuste + 0.65]);
    localStorage.setItem("adjusted-influence-value", VPFA);
  };

  return (
    <>
      <div className="flex flex-col justify-between pt-12 text-baseColor gap-6">
        <section className="flex flex-col gap-8 text-left">
          <h1 className="text-4xl font-bold">Ajusta el valor de tus puntos</h1>
          <p className="text-lg">
            Estos son tus puntos sin ajustar:{" "}
            <span className="text-primary font-semibold">
              {localStorage.getItem("vpfsa-value")}
            </span>
          </p>
        </section>
        {NIVELES_INFLUENCIA.map((item) => {
          return (
            <NivelDeInfluencia
              evaluatePoints={evaluatePoints}
              key={item.id}
              influenceLevel={item}
            />
          );
        })}
        <p className="text-left">
          Puntos VPFSA:{" "}
          <span className="text-primary font-semibold">{result}</span>
        </p>
        <div className="flex justify-center gap-3 items-center">
          <Link
            to="/vpfsa"
            className="w-full bg-secondary boton-secundario text-baseColor"
          >
            Atras
          </Link>
          <Link
            onClick={evaluatePoints}
            to="/estimacion_esfuerzo"
            className="w-full bg-primary boton-principal text-black"
          >
            Siguiente
          </Link>
        </div>
      </div>
    </>
  );
};

const NivelDeInfluencia = ({ influenceLevel, evaluatePoints }) => {
  const { description, id, title, grados } = influenceLevel;
  const key = "IP/" + id;
  const initialValue = Number(localStorage.getItem(key)) || 0;
  const [value, setValue] = useState(initialValue);

  const handleChange = (ev) => {
    const valueToChange = ev.target.value;
    setValue(valueToChange);
    localStorage.setItem(key, valueToChange);
    evaluatePoints();
  };

  return (
    <>
      <article className="text-left flex flex-col gap-6">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-3">
            <h2 className="text-primary text-xl font-semibold">{title}</h2>
          </div>
          <span className="text-primary font-semibold text-center">
            {value === null ? 0 : value}
          </span>
        </div>
        {influenceLevel.options && (
          <ModalOptions options={influenceLevel.options} />
        )}
        {grados.map((item) => {
          const { grado, description } = item;
          return (
            <div
              className="flex items-center gap-3"
              key={grado + "-" + description}
            >
              <input
                className="accent-accent"
                type="radio"
                id={description + id}
                name={id}
                onChange={handleChange}
                value={grado}
              />
              <label htmlFor={description + id}>{description}</label>
            </div>
          );
        })}
        <hr className="opacity-70" />
      </article>
    </>
  );
};

// const FacilidadDeOperacion = ({ influenceLevel, evaluatePoints }) => {
//   const { description, id, title, grados } = influenceLevel;
//   const key = "IP/" + id;
//   const initialValue = Number(localStorage.getItem(key)) || 0;
//   const [value, setValue] = useState(initialValue);

//   const handleChange = (ev) => {
//     const valueToChange = ev.target.value;
//     setValue(valueToChange);
//     localStorage.setItem(key, valueToChange);
//     evaluatePoints();
//   };

//   return (
//     <>
//       <article className="text-left flex flex-col gap-6">
//         <div className="flex justify-between items-center w-full">
//           <div className="flex gap-3">
//             <h2 className="text-primary text-xl font-semibold">{title}</h2>
//           </div>
//           <span className="text-primary font-semibold text-center">
//             {value === null ? 0 : value}
//           </span>
//         </div>
//         {influenceLevel.options && (
//           <ModalOptions options={influenceLevel.options} />
//         )}
//         {grados.map((item) => {
//           const { grado, description } = item;
//           return (
//             <div
//               className="flex items-center gap-3"
//               key={grado + "-" + description}
//             >
//               <input
//                 className="accent-accent"
//                 type="radio"
//                 id={description + id}
//                 name={id}
//                 onChange={handleChange}
//                 value={grado}
//               />
//               <label htmlFor={description + id}>{description}</label>
//             </div>
//           );
//         })}
//         <hr className="opacity-70" />
//       </article>
//     </>
//   );
// };

const ModalOptions = ({ options }) => {
  return (
    <div className="modal_options">
      <ul className="list-disc">
        {options.map((item) => {
          return <li key={"options_item-" + item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
