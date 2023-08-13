import { useState } from "react";
import { Link } from "react-router-dom";
import { LANGUAGE_VARIATIONS } from "../constants/language_generations";
import "./estimacionEsfuerzo.css";

export const EstimacionEsfuerzo = () => {
  const initialValue = 1;
  const [developers, setDevelopers] = useState(initialValue);
  const [dailyHours, setDailyHours] = useState(initialValue);

  const [selected, setSelected] = useState({
    title: null,
    averagePF: null,
  });

  const calculateFinalPoints = (ev) => {
    const dailyHoursValue = dailyHours;
    const developersAmount = developers;
    const selectedLanguageType = selected;
    if (selected.title === null) {
      alert("Selecciona en qué está hecho tu software");
      ev.preventDefault();
      return;
    }
    localStorage.setItem("averagePF", JSON.stringify(selectedLanguageType));
    localStorage.setItem("dailyHours", dailyHoursValue);
    localStorage.setItem("developersNumber", developersAmount);
  };

  return (
    <div className="flex flex-col pt-12 text-baseColor gap-6">
      <section className="flex flex-col gap-4 text-left">
        <h1 className="text-4xl font-bold">Estimacion de Esfuerzo</h1>
        <p className="">
          ¿En qué está hecho tu{" "}
          <span className="font-semibold text-primary">software</span>?
        </p>
      </section>
      <section className="my-4">
        <ul className="generationsCards_container">
          {LANGUAGE_VARIATIONS.slice(0, 3).map((type) => {
            return (
              <LanguageGeneration
                key={type.id}
                setSelected={setSelected}
                selected={selected}
                type={type}
              />
            );
          })}
        </ul>
      </section>
      <section className="text-left flex w-full gap-4 justify-between flex-wrap">
        <article className="grid grid-cols-2 w-full gap-6 items-center">
          <h2>Numero de desarrolladores</h2>
          <input
            min={1}
            max={99}
            onChange={(ev) => setDevelopers(Number(ev.target.value))}
            defaultValue={initialValue}
            type="number"
            id="large-input"
            placeholder="Desarroladores"
            className="p-2 rounded-lg sm:text-md placeholder:text-[#a8a8a8] placeholder:italic bg-secondary font-semibold"
          />
        </article>
        <article className="grid grid-cols-2 w-full gap-6 items-center">
          <h2>Horas de trabajo diarias</h2>
          <input
            min={1}
            max={8}
            onChange={(ev) => setDailyHours(Number(ev.target.value))}
            defaultValue={initialValue}
            type="number"
            id="large-input"
            placeholder="Horas diarias"
            className="p-2 rounded-lg sm:text-md placeholder:text-[#a8a8a8] placeholder:italic bg-secondary font-semibold"
          />
        </article>
      </section>
      <section className="flex lastButtons_container w-full gap-4">
        <Link
          to={"/vpfa"}
          className="w-full items-center boton-secundario bg-secondary text-baseColor"
        >
          Volver
        </Link>
        <Link
          onClick={calculateFinalPoints}
          to={"/results"}
          className="w-full boton-principal bg-primary text-black"
        >
          Resultados finales
        </Link>
      </section>
    </div>
  );
};

const LanguageGeneration = ({ type, setSelected, selected }) => {
  const { title, languages, averagePF } = type;
  const handleClick = () => {
    setSelected({ averagePF, title });
  };

  let dotColor;
  let selectedEffect;

  selected.title === title
    ? (dotColor = "bg-accent")
    : (dotColor = "bg-[#b3b3b3]");
  selected.title === title ? (selectedEffect = "selectedEffect") : "";

  return (
    <li
      onClick={handleClick}
      className={`${selectedEffect} relative cursor-pointer bg-secondary py-6 px-4 rounded-lg flex flex-col gap-4 items-center transition-all`}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex gap-5 w-full flex-wrap items-center justify-center">
        {languages.map((item) => {
          const { id, icon } = item;
          return (
            <picture key={id}>
              <img src={icon} alt="" height={46} width={46} />
            </picture>
          );
        })}
      </div>
      <span
        className={`absolute top-3 right-4 h-2 w-2 rounded-full ${dotColor}`}
      ></span>
    </li>
  );
};
