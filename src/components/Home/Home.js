import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {CardMedia, Container, Button} from '@material-ui/core';
import homeBg from '../../resources/videos/home-bg.mp4'

const useStyles = makeStyles({
  container: {
    padding: 0,
    margin: 0,
    maxWidth: "100%",
    position: "relative"
  },

  header: {
    padding: 0,
    margin: 0,
    position: "absolute",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "90%"
  },
  button: {
    transition: ".4s ease",
    "&:hover": {
      backgroundColor: "#161616",
      color: "#dddddd"
    }
  },
  video: {
    objectFit: "cover",
    height: "94vh",
    filter:"grayscale(100%) brightness(40%)",
  },
  headline: {
    fontFamily:"Josefin Slab",
    fontSize: "4rem",
    color: "#dddddd",
    margin: "0"
  },
  subtitle: {
      fontFamily:"Josefin Slab",
      fontSize: "1.8rem",
      color: "#dddddd",
  }
});

function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.headline}>WELCOME TO THE REVOLUTION</h1>
          <h3 className={classes.subtitle}>Experience Drone videography at its finest.</h3>
          <Button className={classes.button} variant="contained" >Shop now!</Button>
        </div>
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