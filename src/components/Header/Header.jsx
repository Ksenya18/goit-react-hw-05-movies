import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
