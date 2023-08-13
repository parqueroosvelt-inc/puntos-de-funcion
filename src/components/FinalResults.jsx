import { useState } from "react";
import { CustomTable } from "./CustomTable";
import { Link, Navigate, redirect } from "react-router-dom";
import { getAllValues } from "../functions/valuesFromLocalStorage";
import { calculateDays } from "../functions/calculateDays";
import JSConfetti from "js-confetti";

export const FinalResults = () => {
  const allValues = getAllValues();
  const { horasHombre, allInfo } = calculateFinalResult(allValues);
  const [finalResult, setFinalResult] = useState(horasHombre);

  const finishTour = () => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      confettiNumber: 100,
    });
  };

  return (
    <div className="flex flex-col pt-12 text-baseColor gap-6">
      <section className="flex flex-col gap-4 text-left">
        <h1 className="text-4xl font-bold">
          Resultados finales: <span className="text-accent">{horasHombre}</span>
        </h1>
        <p className="">
          Aquí puedes encontras los resultados de todos los calculados
          realizados para tu software.
        </p>
      </section>
      <hr />
      <section className="flex flex-col gap-3">
        <h3 className="text-left">Resumen de los valores calculados.</h3>
        <CustomTable values={Object.entries(allValues)} />
      </section>
      <section className="flex flex-col gap-3">
        <h3 className="text-left">
          Tiempo estimado de trabajo por{" "}
          <span className="underline underline-offset-2 decoration-2 decoration-primary">
            cada desarrollador.
          </span>
        </h3>
        <CustomTable values={Object.entries(allInfo.team)} />
      </section>
      <div className="flex justify-center gap-3 items-center">
        <Link
          to="/estimacion_esfuerzo"
          className="w-full bg-secondary boton-secundario text-baseColor"
        >
          Atras
        </Link>
        <Link
          to={"/"}
          id="finishTour_button"
          onClick={finishTour}
          className="w-full bg-primary boton-principal text-black"
        >
          Finalizar
        </Link>
      </div>
    </div>
  );
};

function calculateFinalResult(allValues) {
  const { Desarrolladores: desarrolladores, VPFA } = allValues;
  const averagePF = allValues["Horas PF Promedio"];
  const dailyHours = allValues["Horas diarias"];
  const horasHombre = VPFA * averagePF;
  const [diasTrabajo, mesesTrabajo] = calculateDays(horasHombre, dailyHours);
  const [DEV_diasTrabajo, DEV_mesesTrabajo] = calculateDays(
    horasHombre / desarrolladores,
    dailyHours
  );
  const allInfo = {
    developer: {
      Dias: diasTrabajo,
      Meses: mesesTrabajo,
    },
    team: {
      Dias: DEV_diasTrabajo,
      Meses: DEV_mesesTrabajo,
    },
  };
  return { horasHombre, allInfo };
}
