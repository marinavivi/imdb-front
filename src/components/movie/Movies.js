import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import MovieCard from "../../cards/MovieCard";

const Movies = ({ movies }) => {
  return (
    <div>
      <Link to="/movies/add">add</Link>
      <h2>Movies</h2>
      <Container>
        <Grid container spacing={3}>
          {movies.map((movie) => {
            return (
              <Grid item key={movie.id} xs={12} md={6} lg={4}>
                <MovieCard movie={movie} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};
export default Movies;
