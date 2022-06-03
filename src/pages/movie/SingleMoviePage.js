import { useParams } from "react-router-dom";
import SingleMovie from "../../components/movie/SingleMovie";
import { getMovie } from "../../store/movie/actions";
import { movieSelector } from "../../store/movie/selectors";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const SingleMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie(id));
    // eslint-disable-next-line
  }, []);

  const movie = useSelector(movieSelector());

  return <SingleMovie movie={movie} />;
};
export default SingleMoviePage;
