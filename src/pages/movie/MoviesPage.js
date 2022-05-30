import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Movies from "../../components/movie/Movies";
import { getMovies } from "../../store/movie/actions";
import { moviesListSelector } from "../../store/movie/selectors";
import { useSelector } from "react-redux";

const MoviesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
    // eslint-disable-next-line
  }, []);

  const movies = useSelector(moviesListSelector());

  return <Movies movies={movies} />;
};
export default MoviesPage;
