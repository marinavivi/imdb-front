import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import MovieCard from "../../cards/MovieCard";
import { Pagination } from "@mui/material";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Autocomplete } from "@mui/material";
import RadioButtonsGroup from "./Checkbox";
import { ADD_MOVIE } from "../../constants/routes";

const Movies = ({
  movies,
  setPage,
  page,
  count,
  setSearch,
  genre,
  setGenre,
}) => {
  return (
    <div>
      <Container>
        <Link to={ADD_MOVIE}>add</Link>
        <h2>Movies</h2>
        <Stack spacing={2} sx={{ width: 300, marginBottom: 4, marginTop: 4 }}>
          <Autocomplete
            id="movie"
            options={movies.map((option) => option.title)}
            renderInput={(params) => <TextField {...params} label="Search" />}
            onInputChange={(event, value) => setSearch(value)}
          />
        </Stack>
        <Grid container spacing={3}>
          {movies.map((movie) => {
            return (
              <Grid item key={movie.id} xs={12} md={6} lg={4}>
                <MovieCard movie={movie} />
              </Grid>
            );
          })}
        </Grid>
        <Pagination
          onChange={(e, value) => setPage(value)}
          count={Math.ceil(count / 10)}
        />
        <RadioButtonsGroup genre={genre} setGenre={setGenre} />
      </Container>
    </div>
  );
};

export default Movies;
