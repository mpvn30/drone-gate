import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {CardMedia, Container} from '@material-ui/core';
import homeBg from '../../resources/videos/home-bg.mp4'

const useStyles = makeStyles({
  container: {
    padding: 0,
    margin: 0,
    maxWidth: "100%",
    position: "relative"
  },
  video: {
    objectFit: "cover",
    height: "94vh",
    filter:"grayscale(100%) brightness(40%)",
  }
});

function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
        <h1 style={{"fontSize":"4rem", "position": "absolute", "zIndex": "22", "color": "white"}}>WELCOME TO THE REVOLUTION</h1>
        <CardMedia 
        classes={{ media: classes.video }}
        component="video"
        src={homeBg}
        autoPlay
        />
    </Container>
  );
}

export default Home