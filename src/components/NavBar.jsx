import { NAVBAR_SECTIONS } from "../constants/navbarSections";
import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";
import "./navBar.css";
import { useTheme } from "../hooks/useChangeTheme";
import { THEMES } from "../constants/theme-modes";
import { Link } from "react-router-dom";

export const NavBar = () => {
  // const [theme, setTheme] = useChangeTheme()
  const [theme, setTheme] = useTheme();
  const actualTheme = THEMES[theme];
  return (
    <nav className="text-baseColor py-6">
      <ul className="flex items-center justify-between">
        <Link
          className="transition-all hover:scale-110 hover:opacity-60"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={44}
            height={44}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            className="icon icon-tabler icon-tabler-code-dots"
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M15 12h.01M12 12h.01M9 12h.01M6 19a2 2 0 0 1-2-2v-4l-1-1 1-1V7a2 2 0 0 1 2-2M18 19a2 2 0 0 0 2-2v-4l1-1-1-1V7a2 2 0 0 0-2-2" />
          </svg>
        </Link>
        <li className="flex items-center justify-center">
          <Around toggle={setTheme} toggled={actualTheme} duration={450} />
        </li>
        <div className="flex items-center gap-6">
          {NAVBAR_SECTIONS.map((item) => {
            return (
              <li className="transition-all hover:opacity-60" key={item.id}>
                <a href={item.route}>{item.title}</a>
              </li>
            );
          })}
          <li className="">
            <Link
              className="transition-all hover:opacity-60 px-4 boton-principal text-black rounded-lg bg-primary"
              to="/vpfsa"
            >
              Calcular
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
