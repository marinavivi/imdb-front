import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { getGenres } from "../../store/genre/actions";
import { genresListSelector } from "../../store/genre/selectors";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function RadioButtonsGroup({ setGenre }) {
  const dispatch = useDispatch();

  const [list, setList] = React.useState([]);

  useEffect(() => {
    dispatch(getGenres());
    // eslint-disable-next-line
  }, []);

  const genres = useSelector(genresListSelector());

  useEffect(() => {
    setList(genres.results);
    // eslint-disable-next-line
  }, [genres]);

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=""
        name="genre"
      >
        {list?.map((genre) => {
          return (
            <FormControlLabel
              key={genre.id}
              value={genre.id}
              control={<Radio />}
              label={genre.name}
              onChange={(event) => setGenre(event.target.value)}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
