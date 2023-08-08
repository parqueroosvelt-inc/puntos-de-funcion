import { useState } from "react";
import { InsertILF } from "./InsertILF";

export const ILF_SECTION = () => {
  const [tablas, setTablas] = useState(
    JSON.parse(localStorage.getItem("All_Ilf") || "[]")
  );
  const [showModal, setShowModal] = useState(true);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleDelete = (id) => {
    const newList = tablas.filter((li) => li.id !== id);
    setTablas(newList);
    localStorage.setItem("All_Ilf", JSON.stringify(newList));
  };

  return (
    <>
      <article className="flex flex-col gap-6 items-center justify-between bg-secondary rounded-md py-4 px-5">
        <div className="flex items-center justify-between w-full">
          <section className="text-start">
            <h2 className="text-xl font-semibold">Fichero lógico interno</h2>
            <p>
              Archivos del punto de vista lógico / tablas en la base de datos.
            </p>
          </section>
          <button
            onClick={handleModal}
            href="/ilf/add"
            className="px-4 text-background py-2 rounded-lg font-semibold bg-primary"
          >
            Add
          </button>
        </div>
        <div className="w-full">
          {tablas.length !== 0 && (
            <table className="w-full text-sm">
              <thead className="text-xs uppercase bg-accent">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Tabla_BD
                  </th>
                  <td scope="col" className="px-6 py-3">
                    Valor
                  </td>
                  <td scope="col" className="px-6 py-3">
                    Acción
                  </td>
                </tr>
              </thead>
              <tbody className="ilf_table">
                {tablas.map((item) => {
                  return (
                    <tr
                      key={item.id}
                      className="border-b border-gray-700 bg-secondary"
                    >
                      <td scope="col" className="px-6 py-3">
                        {item.databaseTableName}
                      </td>
                      <td>{item.complexity}</td>
                      <td scope="col" className="px-6 py-3">
                        <button
                          className="bg-[#2a2a2a] border-2 hover:border-[#ff6464]"
                          onClick={() => handleDelete(item.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            className="icon icon-tabler icon-tabler-trash"
                            viewBox="0 0 24 24"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </article>
      {showModal && (
        <InsertILF
          setTablas={setTablas}
          setShowModal={setShowModal}
        ></InsertILF>
      )}
    </>
  );
};
