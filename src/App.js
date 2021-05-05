import { Grid, useMediaQuery } from "@material-ui/core";
import React from "react";
import AddSong from "./components/AddSong";
import Header from "./components/Header";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";

function App() {
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <>
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
    </>
  );
}

export default App;
