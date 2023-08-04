import { useState } from "react";
import { TIPOS_FUNCIONES } from "../constants/puntos_funcion";
import { ILF } from "./ILF";

export const ValuesTables = () => {
  const [totalPoints, setTotalPoints] = useState();

  return (
    <section className="flex flex-col gap-6">
      {TIPOS_FUNCIONES.slice(0, 5).map((item) => {
        return <FP_ROW fp={item} key={item.id} />;
      })}
      <ILF />
      <button>See the results!</button>
      <p>{totalPoints}</p>
    </section>
  );
};

const FP_ROW = ({ fp }) => {
  const { tipo, descripcion, baja, media, alta } = fp;

  const [value, setValue] = useState(0);
  const [ammount, setAmmount] = useState(0);

  const handleChange = (ev) => {
    setValue(ev.target.value);
  };

  return (
    <article className="flex flex-col gap-2 items-start justify-between bg-purple-900 rounded-md py-4 px-5">
      <h2 className="text-xl font-semibold">{tipo}</h2>
      <p>{descripcion}</p>
      <p>{ammount}</p>
      <section className="flex gap-4 items-center">
        <button onClick={() => setAmmount(ammount - 1)}>-</button>
        <button onClick={() => setAmmount(ammount + 1)}>+</button>
      </section>
      <section className="flex justify-center">
        <select onChange={handleChange} className="w-full">
          <option value={baja}>Baja</option>
          <option selected value={media}>
            Media
          </option>
          <option value={alta}>Alta</option>
        </select>
      </section>
    </article>
  );
};

// const FUNCTION_POINT = ({ fp }) => {
//   const { tipo, descripcion, baja, media, alta } = fp;

//   const [ammount, setAmmount] = useState(0);
//   const [value, setValue] = useState(0);
//   const [result, setResult] = useState(0);

//   const calculateResult = () => {
//     setResult(value * ammount);
//   };

//   const handleChange = (ev) => {
//     setValue(ev.target.value);
//   };

//   return (
//     <article className="rounded-md">
//       <h2>{tipo}</h2>
//       <p>{descripcion}</p>
//       <p>{ammount}</p>
//       <section className="flex justify-center">
//         <select onChange={handleChange} className="w-full">
//           <option value={baja}>Baja</option>
//           <option value={media}>Media</option>
//           <option value={alta}>Alta</option>
//         </select>
//       </section>
//       <button onClick={() => setAmmount(ammount - 1)}>-</button>
//       <button onClick={() => setAmmount(ammount + 1)}>+</button>
//       <footer>
//         <p>The result is: {result}</p>
//         <button onClick={calculateResult}>Calculate!</button>
//       </footer>
//     </article>
//   );
// };
