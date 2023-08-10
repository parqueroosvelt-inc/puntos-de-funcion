import { ValuesTables } from "./ValuesTables";

export const CalculatePoints = () => {
  return (
    <>
      <div className="flex flex-col justify-between py-12 text-baseColor gap-6">
        <section className="flex flex-col gap-8 text-left">
          <h1 className="text-4xl font-bold">Calcula Tus Puntos de Función</h1>
          <p>* texto explicativo *</p>
        </section>
        <section>
          <ValuesTables />
        </section>
      </div>
    </>
  );
};
