import { useRef, useState } from "react";
import { ILF_FUNCTION } from "../constants/puntos_funcion";

export const InsertILF = ({ setShowModal, setTablas }) => {
  const inputRef = useRef(null);
  const { baja, media, alta } = ILF_FUNCTION;
  const [complexity, setComplexity] = useState(null);

  const handleChange = (ev) => {
    setComplexity(ev.target.value);
  };

  const showError = () => {
    alert("Rellene todos los campos para continuar");
  };

  function addILF({ databaseTableName, todosLosILF, complejidad }) {
    const nuevoILF = {
      databaseTableName,
      complexity: complejidad,
      id: Math.random() + "_" + databaseTableName + "_" + complexity,
    };
    const listaRenovadaDeILF = [...todosLosILF, nuevoILF];
    localStorage.setItem("All_Ilf", JSON.stringify(listaRenovadaDeILF));
    setTablas(listaRenovadaDeILF);
  }

  const handleAdd = () => {
    const complejidad = complexity;
    const databaseTableName = inputRef.current.value || null;
    const todosLosILF = JSON.parse(localStorage.getItem("All_Ilf") || "[]");
    if (complexity === null || databaseTableName === null) {
      return showError();
    }
    addILF({ databaseTableName, todosLosILF, complejidad });
  };

  return (
    <section className="bg-secondary py-10 rounded-lg px-24 flex flex-col gap-6 items-center">
      <div className="relative w-full mb-5">
        <span
          onClick={() => setShowModal(false)}
          className="absolute right-0 cursor-pointer rounded-full transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={44}
            height={44}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            className="icon icon-tabler icon-tabler-circle-x-filled hover:scale-110 transition-all"
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              stroke="none"
              d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34zm-6.489 5.8a1 1 0 0 0-1.218 1.567L10.585 12l-1.292 1.293-.083.094a1 1 0 0 0 1.497 1.32L12 13.415l1.293 1.292.094.083a1 1 0 0 0 1.32-1.497L13.415 12l1.292-1.293.083-.094a1 1 0 0 0-1.497-1.32L12 10.585l-1.293-1.292-.094-.083z"
            />
          </svg>
        </span>
      </div>
      <div className="flex flex-col justify-between w-full gap-8">
        <h2 className="font-semibold text-3xl tracking-tighter text-sky-100">
          ¿Cómo se <span className="text-primary">llama</span> la tabla?
        </h2>
        <input
          ref={inputRef}
          type="text"
          id="large-input"
          placeholder="Nombre de la tabla"
          className="p-2 rounded-lg sm:text-md placeholder:text-[#a8a8a8] placeholder:italic bg-background text-customText"
        />
      </div>
      <div className="flex flex-col gap-8 justify-between w-full">
        <h2 className="font-semibold text-3xl tracking-tighter text-sky-100">
          ¿Qué tan <span className="text-primary">compleja</span> es?
        </h2>
        <select
          onChange={handleChange}
          name=""
          id=""
          className="px-4 py-2 rounded-lg bg-background text-customText"
        >
          <option></option>
          <option value={baja}>Poco compleja</option>
          <option value={media}>Normal</option>
          <option value={alta}>Compleja</option>
        </select>
      </div>
      <button
        onClick={handleAdd}
        className="w-full bg-accent text-background font-bold"
      >
        Añadir
      </button>
    </section>
  );
};
