import { ValuesTables } from "./ValuesTables";

export const CalculatePoints = () => {
  const clearAllValues = () => {
    const theme = localStorage.getItem("theme");
    localStorage.clear();
    localStorage.setItem("theme", theme);
    location.reload();
  };

  return (
    <>
      <div className="flex flex-col justify-between py-12 text-baseColor gap-6">
        <section className="flex flex-col gap-8 text-left">
          <h1 className="text-4xl font-bold">Calcula Tus Puntos de Función</h1>
          <button
            onClick={clearAllValues}
            className="bg-secondary boton-secundario text-baseColor"
          >
            Limpiar Valores
          </button>
          {/* <p>* texto explicativo *</p> */}
        </section>
        <section>
          <ValuesTables />
        </section>
      </div>
    </>
  );
};
