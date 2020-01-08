import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const styles = theme => ({
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

class Shop extends Component {
  
  render(){
    const { classes } = this.props
    return (
      <Container >
            <Card className={classes.card} raised>
              <CardMedia
                className={classes.media}
                component="img"
                image="img"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Description:
                </Typography>
                <Typography variant="body2" color="default" component="p"style={{marginTop: "10px"}} >
                  Price: USD
                </Typography>
              </CardContent>
              <CardActions className={classes.buttons}>
              <Button size="small" color="default">
                View
              </Button>
              <Button variant="contained" size="small" color="primary" className={classes.button} >
                Add to Cart
              </Button>
              </CardActions>
            </Card>
      </Container>
      );
  }
}


export default withStyles(styles)(Shop);
