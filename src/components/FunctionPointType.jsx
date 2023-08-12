import { useRef, useState } from "react";
import "./functionType.css";
import { TrashIcon } from "../assets/Icons";
import { CustomTable } from "./CustomTable";

export const FunctionPointType = ({ fp }) => {
  const { tipo, descripcion, baja, media, alta, key } = fp;
  const keyName = "All_" + key;
  const [values, setValues] = useState(
    JSON.parse(localStorage.getItem(keyName) || "[]")
  );
  const inputRef = useRef(null);
  const selectRef = useRef(null);

  const handleAdd = () => {
    const complejidadPuntoFuncion = selectRef.current.value || null;
    const nombrePuntoFuncion = inputRef.current.value || null;

    const todosLosPF = getAllFP({ keyName });
    const nuevaListaDePF = addFunctionPoint({
      complejidad: complejidadPuntoFuncion,
      name: nombrePuntoFuncion,
      todosLosPF,
    });

    saveResult(nuevaListaDePF);
    inputRef.current.value = "";
  };

  const handleDelete = (id) => {
    const newList = values.filter((li) => li.id !== id);
    saveResult(newList);
  };

  const saveResult = (nuevaListaDePF) => {
    localStorage.setItem(keyName, JSON.stringify(nuevaListaDePF));
    setValues(nuevaListaDePF);
  };

  return (
    <article className="bg-secondary-400 py-4 rounded-lg">
      <section className="flex flex-col w-full gap-6 justify-between">
        <div className="flex gap-4 text-left items-center">
          <h2>{key}</h2>
          <label className="info_item cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              stroke=""
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              className="icon icon-tabler icon-tabler-info-octagon-filled text-accent"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                stroke="none"
                d="M14.897 1a4 4 0 0 1 2.664 1.016l.165.156 4.1 4.1a4 4 0 0 1 1.168 2.605l.006.227v5.794a4 4 0 0 1-1.016 2.664l-.156.165-4.1 4.1a4 4 0 0 1-2.603 1.168l-.227.006H9.103a3.999 3.999 0 0 1-2.664-1.017l-.165-.156-4.1-4.1a4 4 0 0 1-1.168-2.604L1 14.897V9.103a4 4 0 0 1 1.016-2.664l.156-.165 4.1-4.1a4 4 0 0 1 2.605-1.168L9.104 1h5.793zM12 11h-1l-.117.007a1 1 0 0 0 0 1.986L11 13v3l.007.117a1 1 0 0 0 .876.876L12 17h1l.117-.007a1 1 0 0 0 .876-.876L14 16l-.007-.117a1 1 0 0 0-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 0 0-.876-.876L12 11zm.01-3-.127.007a1 1 0 0 0 0 1.986L12 10l.127-.007a1 1 0 0 0 0-1.986L12.01 8z"
              />
            </svg>
          </label>
          <div className="flex items-center info_pop-up transition-all duration-300">
            <div className="absolute w-fit bg-accent rounded-lg px-4 py-1">
              <p className="text-white">{descripcion}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <input
            ref={inputRef}
            type="text"
            id="large-input"
            placeholder="Nombre del PF"
            className="p-2 rounded-lg sm:text-md placeholder:text-[#a8a8a8] placeholder:italic bg-secondary text-customText max-w-[200px]"
          />
          <select
            ref={selectRef}
            className="w-full bg-secondary text-customText px-4 py-3 rounded-lg"
            defaultValue={media}
          >
            <option value={baja}>Baja</option>
            <option value={media}>Media</option>
            <option value={alta}>Alta</option>
          </select>
          <button
            onClick={handleAdd}
            className="px-4 boton-principal text-black py-2 rounded-lg bg-primary"
          >
            Add
          </button>
        </div>
      </section>
      {values.length !== 0 && (
        <section className="flex flex-col py-4">
          <CustomTable editable={true} values={values} />
        </section>
      )}
      <hr className="mt-4 opacity-70" />
    </article>
  );
};

const getAllFP = ({ keyName }) => {
  return JSON.parse(localStorage.getItem(keyName) || "[]");
};

function addFunctionPoint({ name, todosLosPF, complejidad }) {
  if (complejidad === null || name === null) {
    return showError();
  }
  const nuevoPF = {
    name,
    value: complejidad,
    id: Math.random() + "_" + name + "_" + complejidad,
  };
  const nuevaListaDePF = [...todosLosPF, nuevoPF];
  return nuevaListaDePF;
}

function showError() {
  alert("Rellene todos los campos para continuar");
  return [];
}
