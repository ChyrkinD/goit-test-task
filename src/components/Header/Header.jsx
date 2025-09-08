import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const buildLickClass = ({ isActive }) => {
  return clsx('font-medium', isActive && 'text-button-hover');
};

export default function Header() {
  return (
    <header className="bg-badges">
      <div className="w-full max-w-[1440px] mx-auto py-7 px-16 flex items-center justify-between">
        <a href="/">
          <img alt="logo" src="/Logo.png" />
        </a>
        <nav className="flex gap-10">
          <NavLink to="/" className={buildLickClass}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={buildLickClass}>
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
