import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Movies from "../../components/movie/Movies";
import { getMovies } from "../../store/movie/actions";
import { moviesListSelector, countSelector } from "../../store/movie/selectors";
import { useSelector } from "react-redux";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    dispatch(getMovies(page, search, genre));
    // eslint-disable-next-line
  }, [page, search, genre]);

  const movies = useSelector(moviesListSelector());
  const count = useSelector(countSelector());

  return (
    <Movies
      movies={movies}
      page={page}
      setPage={setPage}
      count={count}
      search={search}
      setSearch={setSearch}
      genre={genre}
      setGenre={setGenre}
    />
  );
};
export default MoviesPage;
