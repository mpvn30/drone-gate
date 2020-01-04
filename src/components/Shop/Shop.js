import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  card: {
    margin: "50px",
    maxWidth: "300px",
    maxHeight: "500px",
    display: "inline-flex",
    flexDirection: "column"
  },
  media: {
    height: 200,
    objectFit: "contain"
  },
  buttons: {
    margin: "0",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#A7D32F"
  }
});

function Shop({items}) {
  const classes = useStyles();
  console.log(items)
    return (
      <Container classname={classes.container} >
          {items.map (item => (
            <Card className={classes.card} raised>
              <CardMedia
                className={classes.media}
                component="img"
                image={item.img}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Description: {item.desc}
                </Typography>
                <Typography variant="body2" color="default" component="p"style={{marginTop: "10px"}} >
                  Price: {item.price} USD
                </Typography>
              </CardContent>
              <CardActions className={classes.buttons}>
              <Button size="small" color="default">
                View
              </Button>
              <Button variant="contained" size="small" color="primary" className={classes.button}>
                Add to Cart
              </Button>
              </CardActions>
            </Card>
          ))}
      </Container>
      );

}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}


export default connect(mapStateToProps)(Shop);