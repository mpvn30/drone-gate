import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { addToCart } from '../actions/cartActions'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  card: {
    margin: "20px",
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
    width: "90%",
    marginBottom: 10,
    display: "flex",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#A7D32F"
  },
  header: {
    width: "100%",
    textAlign: "center"
  },
  itemContainer: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }
});

class Shop extends Component {
  
  handleClick = (id) => {
    this.props.addToCart(id)
  }

  render(){
    const { classes } = this.props
    
    let itemList = this.props.items.map(item => {
      return(
        <Card className={classes.card} key={item.id} raised>
          <CardMedia
            className={classes.media}
            component="img"
            image="img"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.desc}
            </Typography>
            <Typography variant="body2" color="default" component="p"style={{marginTop: "10px"}} >
              {item.price}
            </Typography>
          </CardContent>
          <CardActions className={classes.buttons}>
            <Button size="small" color="default">
              View
            </Button>
            <Button variant="contained" size="small" color="primary" className={classes.button} onClick={()=>{this.handleClick(item.id)}} >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      )
    })
    return (
      <>
        <h1 className={classes.header}>The Drone Pro Series</h1>
        <div className={classes.itemContainer}>{itemList}</div>
      </>
      );
  }
}

const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}
const mapDispatchToProps= (dispatch)=>{
  
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Shop));

