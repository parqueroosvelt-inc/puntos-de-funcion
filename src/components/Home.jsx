import { MouseIcon, PageIcon } from "../assets/Icons";
import { homeReasons } from "../constants/HomeReasons";
import { Footer } from "./Footer";
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
            <MouseIcon />
            <p>Baja para ver más secciones</p>
          </div>
        </section>
        <section className="main_img flex items-center">
          <PageIcon />
        </section>
      </div>
      <section className="flex flex-col justify-center text-baseColor gap-12">
        <h2 className="text-xl font-semibold">¿Por qué usar Swift Points?</h2>
        <div className="main_reasons_container flex gap-12">
          {homeReasons.map((item) => {
            return (
              <ReasonCard
                key={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            );
          })}
        </div>
      </section>
      <Footer />
      {/* <ValuesTables /> */}
    </>
  );
};

const ReasonCard = ({ title, description, icon }) => {
  return (
    <article className="reason_card">
      <h3>{title}</h3>
      {icon}
      <p>{description}</p>
    </article>
  );
};
