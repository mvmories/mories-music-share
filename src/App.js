import { Grid, useMediaQuery } from "@material-ui/core";
import React from "react";
import AddSong from "./components/AddSong";
import Header from "./components/Header";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";
import songReducer from "./reducer";

export const SongContext = React.createContext({
  song: {
    id: "1434c455-1f8e-460e-b31a-9d7759e69212",
    title: "Shine On",
    artist: "Pink Floyd",
    duration: "1322",
    thumbnail:
      "https://i.ytimg.com/vi/cWGE9Gi0bB0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBrrXOrpAUt5wbhlkgrhGTvuKSwdQ",
    url: "https://www.youtube.com/watch?v=cWGE9Gi0bB0",
  },
  isPlaying: false,
});

function App() {
  const initialSongState = React.useContext(SongContext);
  const [state, dispatch] = React.useReducer(songReducer, initialSongState);
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <SongContext.Provider value={{ state, dispatch }}>
      <Header />
      <Grid container spacing={3}>
        <Grid
          style={{
            paddingTop: "80px",
          }}
          item
          xs={12}
          md={7}
        >
          <AddSong />
          <SongList />
        </Grid>
        <Grid
          style={
            greaterThanMd
              ? {
                  position: "fixed",
                  width: "100%",
                  right: 0,
                  top: "70px",
                }
              : {
                  position: "fixed",
                  width: "100%",
                  left: 0,
                  bottom: 0,
                }
          }
          item
          xs={12}
          md={5}
        >
          <SongPlayer />
        </Grid>
      </Grid>
    </SongContext.Provider>
  );
}

export default App;
