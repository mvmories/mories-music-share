import { useSubscription } from "@apollo/client";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { PlayArrow, Save } from "@material-ui/icons";
import React from "react";
import { GET_SONGS } from "../graphql/subscriptions";

function SongList() {
  const { data, loading, error } = useSubscription(GET_SONGS);

  /* const song = {
    title: "Beats to Study",
    artist: "Lofi",
    thumbnail: "https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg",
  }; */

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <CircularProgress></CircularProgress>
      </div>
    );
  }

  if (error) {
    return <div>Error fetching songs</div>;
  }

  return (
    <div>
      {data.songs.map((song) => (
        <Song key={song.id} song={song} />
      ))}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(3),
  },

  songInfoContainer: {
    display: "flex",
    alignItems: "center",
  },
  songInfo: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  thumbnail: {
    objectFit: "cover",
    width: 140,
    height: 140,
  },
}));

function Song({ song }) {
  const classes = useStyles();
  const { title, artist, thumbnail } = song;

  return (
    <Card className={classes.container}>
      <div className={classes.songInfoContainer}>
        <CardMedia image={thumbnail} className={classes.thumbnail} />
        <div className={classes.songInfo}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="p"
              color="textSecondary"
            >
              {artist}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton size="small" color="primary">
              <PlayArrow />
            </IconButton>
            <IconButton size="small" color="secondary">
              <Save />
            </IconButton>
          </CardActions>
        </div>
      </div>
    </Card>
  );
}

export default SongList;
