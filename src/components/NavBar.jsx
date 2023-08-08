import { NAVBAR_SECTIONS } from "../constants/navbarSections";

export const NavBar = () => {
  return (
    <nav className="text-baseColor py-6">
      <ul className="flex items-center justify-between">
        <li className="transition-all hover:scale-110 hover:opacity-60">
          <a href="/">
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
          </a>
        </li>
        {NAVBAR_SECTIONS.map((item) => {
          return (
            <li className="transition-all hover:opacity-60" key={item.id}>
              <a href={item.route}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
