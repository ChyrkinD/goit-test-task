import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx('text-xl font-semi-bold pb-6', isActive && 'border-b-[5px] border-button');
};

const TabNavigation = () => (
  <nav className='mb-10 border-b pb-6 border-gray-light'>
    <ul className='flex gap-10'>
      <li>
        <NavLink to="features" className={buildLinkClass} >
          Features
        </NavLink>
      </li>
      <li>
        <NavLink to="reviews" className={buildLinkClass} >
          Reviews
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default TabNavigation;
