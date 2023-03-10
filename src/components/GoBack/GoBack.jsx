import { NavLink, useLocation } from 'react-router-dom';
import css from './GoBack.module.css';

export const GoBack = () => {
  const location = useLocation();
  return (
    <div className={css.containerGoBack}>
      <NavLink className={css.goBack} to={location.state?.from ?? '/'}>
        Go back
      </NavLink>
    </div>
  );
};
