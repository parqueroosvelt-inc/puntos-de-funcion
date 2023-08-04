import { useState } from "react";

export const ILF = () => {
  //   const [ammount, setAmmount] = useState(0);
  const [tablas, setTablas] = useState([]);

  return (
    <article className="flex gap-2 items-center justify-between bg-purple-900 rounded-md py-4 px-5">
      <section className="text-start">
        <h2 className="text-xl font-semibold">Fichero lógico interno</h2>
        <p>Archivos del punto de vista lógico / tablas en la base de datos.</p>
      </section>
      <a
        href="/ilf/add"
        className="px-4 py-2 bg-purple-950 rounded-lg font-semibold"
      >
        Add
      </a>
      {tablas.map((item) => {
        return <h1>{item}</h1>;
      })}
    </article>
  );
};
