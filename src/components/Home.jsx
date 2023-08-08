import { ValuesTables } from "./ValuesTables";
import "./home.css";

export const Home = () => {
  return (
    <>
      <div className="main_container flex justify-between py-12 text-baseColor">
        <section className="main_text flex flex-col gap-8 text-left">
          <h1 className="text-4xl font-bold">
            Calcula Tus <span className="text-primary">Puntos de Funcion</span>{" "}
            Online
          </h1>
          <div className="text-lg">
            <p>¿Necesitas determinar la complejidad de tu software?</p>
            <p>
              Usa nuestra herramienta para realizar cálculos precisos de puntos
              de función en un instante.
            </p>
          </div>
          <section className="main_buttons_container flex gap-4">
            <button className="bg-primary text-black py-3 boton-principal">
              Comenzar
            </button>
            <button className="boton-secundario bg-secondary py-3 px-6">
              ¿Cómo funciona?
            </button>
          </section>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={44}
              height={44}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              className="icon icon-tabler icon-tabler-mouse"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M6 7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4zM12 7v4" />
            </svg>
            <p>Baja para ver más secciones</p>
          </div>
        </section>
        <section className="main_img flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={124}
            height={124}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            id="main_icon-code-dots"
            className="icon icon-tabler icon-tabler-code-dots"
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M15 12h.01M12 12h.01M9 12h.01M6 19a2 2 0 0 1-2-2v-4l-1-1 1-1V7a2 2 0 0 1 2-2M18 19a2 2 0 0 0 2-2v-4l1-1-1-1V7a2 2 0 0 0-2-2" />
          </svg>
        </section>
      </div>
      <section className="flex flex-col items-center justify-center text-baseColor gap-6">
        <h2 className="text-xl font-semibold">¿Por qué usar Swift Points?</h2>
        <div className="main_reasons_container flex gap-12">
          <article className="reason_card">
            <h3>Ahorra tiempo</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={74}
              height={74}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              className="icon icon-tabler icon-tabler-clock-heart transition-all hover:text-primary"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M20.956 11.107a9 9 0 1 0-9.579 9.871" />
              <path d="m18 22 3.35-3.284a2.143 2.143 0 0 0 .005-3.071 2.242 2.242 0 0 0-3.129-.006l-.224.22-.223-.22a2.242 2.242 0 0 0-3.128-.006 2.143 2.143 0 0 0-.006 3.071L18 22zM12 7v5l.5.5" />
            </svg>
            <p>
              Nuestra web realiza cálculos de puntos de función de forma rápida,
              pudiendo dedicar más tiempo a otras tareas importantes en tu
              proyecto
            </p>
          </article>
          <article className="reason_card">
            <h3>Sin complicaciones</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={74}
              height={74}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              className="icon icon-tabler icon-tabler-heart-handshake transition-all hover:text-primary"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M19.5 12.572 12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
              <path d="M12 6 8.707 9.293a1 1 0 0 0 0 1.414l.543.543c.69.69 1.81.69 2.5 0l1-1a3.182 3.182 0 0 1 4.5 0l2.25 2.25M12.5 15.5l2 2M15 13l2 2" />
            </svg>
            <p>
              La interfaz sencilla y amigable de nuestra web permite a cualquier
              usuario
            </p>
          </article>
          <article className="reason_card">
            <h3>Sin costo</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={74}
              height={74}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              className="icon icon-tabler icon-tabler-zoom-money transition-all hover:text-primary"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0M21 21l-6-6" />
              <path d="M12 7H9.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H8M10 13v1m0-8v1" />
            </svg>
            <p>Utiliza una herramienta valiosa sin ninguna suscripción.</p>
          </article>
        </div>
      </section>
      <br />
      <ValuesTables />
    </>
  );
};
