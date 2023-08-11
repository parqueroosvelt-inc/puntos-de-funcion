import { useState } from "react";
import { NIVELES_INFLUENCIA } from "../constants/nivelesDeInfluencia";

export const VPFA = () => {
  const [result, setResult] = useState(
    localStorage.getItem("influencepoints-value") || 0
  );

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

    const VPFA = VPFSA * [0.01 * factorDeAjuste + 0.65];
    console.log(VPFA);
  };

  return (
    <div className="flex flex-col justify-between py-12 text-baseColor gap-6">
      <section className="flex flex-col gap-8 text-left">
        <h1 className="text-4xl font-bold">Ajusta el valor de tus puntos</h1>
        <p>
          Estos son tus puntos sin ajustar:{" "}
          <span className="text-primary font-semibold">
            {localStorage.getItem("vpfsa-value")}
          </span>
        </p>
      </section>
      {NIVELES_INFLUENCIA.map((item) => {
        return <NivelDeInfluencia key={item.id} influenceLevel={item} />;
      })}
      <button onClick={handleSubmit} className="boton-principal bg-primary">
        Submit
      </button>
      <button
        onClick={handleCalculateVPFA}
        className="boton-principal bg-primary"
      >
        Calculate
      </button>
      <span>TDI: {result}</span>
    </div>
  );
};

const NivelDeInfluencia = ({ influenceLevel }) => {
  const { description, id, title, grados } = influenceLevel;
  const key = "IP/" + id;
  const initialValue = Number(localStorage.getItem(key)) || 0;
  const [value, setValue] = useState(initialValue);

  const handleChange = (ev) => {
    const valueToChange = ev.target.value;
    setValue(valueToChange);
    localStorage.setItem(key, valueToChange);
  };

  return (
    <>
      <article className="text-left flex flex-col gap-6">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-3">
            <h2 className="text-primary font-semibold">{title}</h2>
            {/* <label className="info_item cursor-pointer">
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
            </label> */}
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
