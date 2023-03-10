import css from './MovieList.module.css';
const { NavLink, useLocation } = require('react-router-dom');

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.movieList}>
      {movies &&
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <NavLink
                className={css.movieListLink}
                state={{ from: location }}
                to={`/movies/${movie.id}`}
              >
                <span>{movie.title}</span>
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};
