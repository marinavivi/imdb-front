import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CardActionArea } from "@mui/material";

const MovieCard = ({ movie }) => {
  const path = "/movies/" + movie.id;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={movie.coverImage}
          alt="movie"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component={Link} to={path}>
            {movie.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
            }}
          >
            {movie.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default MovieCard;
