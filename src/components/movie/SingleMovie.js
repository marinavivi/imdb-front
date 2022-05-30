import * as React from "react";

const SingleMovie = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <img src={movie.coverImage} alt="movie" />
      <p>{movie.genre}</p>
    </div>
  );
};
export default SingleMovie;
