import { JavaIcon, JavascriptIcon, PHPIcon } from "../assets/Icons";
import fortran from "../assets/fortran.png";

export const EstimacionEsfuerzo = () => {
  return (
    <div className="flex flex-col justify-between py-12 text-baseColor gap-6">
      <section className="flex flex-col gap-8 text-left">
        <h1 className="text-4xl font-bold">Estimacion de Esfuerzo</h1>
        <p>* texto explicativo *</p>
      </section>
      <LanguageGeneration />
    </div>
  );
};

const LanguageGeneration = () => {
  return (
    <section className="flex gap-3">
      <h2 className="text-primary text-xl font-semibold"></h2>
      <img src={fortran} alt="" />
      <JavascriptIcon />
      <PHPIcon />
      <JavaIcon />
    </section>
  );
};
