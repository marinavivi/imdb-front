import { addMovie } from "../../store/movie/actions";
import { useDispatch, useSelector } from "react-redux";
import AddMovie from "../../components/movie/AddMovie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getGenres } from "../../store/genre/actions";
import { genresListSelector } from "../../store/genre/selectors";

const AddMoviePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getGenres());
    // eslint-disable-next-line
  }, []);

  const genres = useSelector(genresListSelector());

  const handleOnSubmit = (data) => {
    dispatch(addMovie(data, () => navigate("/")));
  };

  return <AddMovie handleOnSubmit={handleOnSubmit} genres={genres} />;
};
export default AddMoviePage;
