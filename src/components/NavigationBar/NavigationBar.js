import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Paper, Tab, Tabs, Typography, Container} from '@material-ui/core';


function NavigationBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root} >
      <Container className={classes.logo}>
        <Typography style={
          {"fontFamily": "Righteous", "fontSize": "1.8rem"}
        }>DroneGate</Typography>
      </Container>
      <Container className={classes.tabs}>
        <Tabs
          classes={{ indicator: classes.indicator, flexContainer: classes.flexContainer}}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
        >
          <Tab label="Home" className={classes.tabSpacing} />
          <Tab label="Shop" className={classes.tabSpacing} />
          <ShoppingCartIcon className={classes.cart} />
        </Tabs>
      </Container>
    </Paper>
  );
}

export default NavigationBar;


/**STYLES**/

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: "flex",
    height: "5vh",
    paddingBottom: "1vh",
    backgroundColor: "#151616",
  },
  logo:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    color: "white"
  },
  cart: {
    height: "auto",
    color: "white",
    "&:hover":{
      cursor: "pointer",
    }
  },
  indicator: {
    backgroundColor: "silver",
  },
  flexContainer: {
    justifyContent: "flex-end",
  },
  tabSpacing: {
    fontSize: "1rem",
    margin: "0 5px",
    color: "white"
  },
  tabs: {
    display: "flex",
    justifyContent: "center"
  }
});