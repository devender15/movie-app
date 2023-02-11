import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// utility function
import getLocalStorage from "../utils/localStorage";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Movie = ({ results }) => {
  const [expanded, setExpanded] = useState(false);

  const addFavourite = () => {

    console.log("added to favorites!");

    let movieName = results?.Title;

    let favourites = getLocalStorage("favourites");
    if (!favourites) {
      localStorage.setItem("favourites", JSON.stringify([movieName]));
    } else {
      favourites.push(movieName);
      localStorage.setItem("favourites", JSON.stringify(favourites));
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <header>
        <h1 className="font-semibold mb-6">Movie details</h1>
      </header>

      <main className="w-full flex justify-center items-center">
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {results?.Title[0]}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={results?.Title}
            subheader={results?.Year}
          />
          <CardMedia
            component="img"
            height="194"
            image={results?.Poster}
            alt="Movie poster"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {results?.Plot}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={addFavourite}>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                <b> Genre </b> : {results?.Genre}
              </Typography>
              <Typography paragraph>
                <b> Country </b> : {results?.Country}
              </Typography>
              <Typography paragraph>
                <b> Director </b> : {results?.Director}
              </Typography>
              <Typography paragraph>
                <b>Actors</b> : {results?.Actors}
              </Typography>
              <Typography paragraph>
                <b>Writer</b> : {results?.Writer}
              </Typography>
              <Typography paragraph>
                <b>Awards</b> : {results?.Awards}
              </Typography>
              <Typography paragraph>
                <b>imdb Rating</b> : {results?.imdbRating}
              </Typography>
              <Typography paragraph>
                <b>imdb Votes</b> : {results?.imdbVotes}
              </Typography>
              <Typography paragraph>
                <b>imdb Rating</b> : {results?.imdbRating}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </main>
    </>
  );
};

export default Movie;
