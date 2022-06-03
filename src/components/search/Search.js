import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Autocomplete } from "@mui/material";

const Search = ({ movies }) => {
  return (
    <Stack spacing={2} sx={{ width: 300, marginBottom: 4, marginTop: 4 }}>
      <Autocomplete
        id="movie"
        options={movies.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Search" />}
        onInputChange={(event, value) => console.log(value)}
      />
    </Stack>
  );
};
export default Search;
