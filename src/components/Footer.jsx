import { contactLink } from "../constants/contactLinks";

export const Footer = () => {
  return (
    <footer className="mt-6 px-2 py-4 rounded-lg">
      <hr className="mb-8 my-6" />
      <section className="grid movil-m:grid-cols-1 movil-s:grid-cols-1 movil-l:grid-cols-2 gap-10 px-2">
        <article className="flex gap-3 flex-col">
          <a
            href="/"
            className="tracking-tighter flex items-center gap-2 font-bold text-baseColor"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={34}
              height={34}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              id="main_icon-code-dots"
              className="icon icon-tabler icon-tabler-code-dots transition-all duration-700"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M15 12h.01M12 12h.01M9 12h.01M6 19a2 2 0 0 1-2-2v-4l-1-1 1-1V7a2 2 0 0 1 2-2M18 19a2 2 0 0 0 2-2v-4l1-1-1-1V7a2 2 0 0 0-2-2" />
            </svg>
            Swift Points
          </a>
          <p className="text-left text-baseColor">© 2023 | CC License</p>
          <p className="text-left text-baseColor">
            Web realizada por
            <span className="font-semibold text-primary">
              {" "}
              Parque Roosevelt Inc
            </span>
            .
          </p>
        </article>
        <article>
          <h3 className="font-bold mb-2 text-left text-baseColor">Contacto</h3>
          <ul className="flex flex-col text-baseColor">
            {contactLink.map((item) => {
              return (
                <Contacto title={item.title} link={item.link} key={item.id} />
              );
            })}
          </ul>
        </article>
      </section>
    </footer>
  );
};

const Contacto = ({ title, link }) => {
  return (
    <li className="py-2 hover:underline">
      <a
        target="_blank"
        href={link}
        className="flex items-center gap-2"
        rel="noreferrer"
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="8"
          fill="none"
        >
          <path
            fill="#92A0B3"
            d="m8.5 6.613-1.13.007V1.94L1.313 8 .5 7.188 6.559 1.13l-4.672.008V0H8.5v6.613Z"
          ></path>
        </svg>
      </a>
    </li>
  );
};
