import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.css";

const buildLickClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Header() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLickClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLickClass}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
