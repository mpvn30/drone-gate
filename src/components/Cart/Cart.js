  
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { Paper, CardMedia } from '@material-ui/core/';
import { removeItem,addQuantity,subtractQuantity} from '../actions/cartActions'
import CartButtons from './CartButtons'

const styles = theme => ({
  items: {
    display: "flex",
    margin: "10px",
    width: "100%"
  },
  container: {
    paddingTop: "50px",
    display: "flex",
    flexDirection: "column",
    width: "50%",
    margin: "0 auto"
  },
  added: {
    width: "100%"
  }
});

class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render(){

      const { classes } = this.props

      let addedItems = this.props.items.length ? (
        this.props.items.map(item => {
          return (
            <Paper elevation={3} key={item.id} className={classes.items} >
              <div>
                <CardMedia
                component="img"
                image="img"
                title="Contemplative Reptile"
                />
              </div>
              <div>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </Paper>
            
          )
        })
      ) : (
        <h1 style={{width: "100%", textAlign: "center"}}>Oh no! Your cart is empty!</h1>
      )

      return(
        <div className={classes.container}>
          <div className={classes.added}>
            {addedItems}
          </div>
          <div>
            <CartButtons />
          </div>
        </div>
      )
    }
}

const mapStateToProps = (state)=>{
  return{
      items: state.addedItems,
      //addedItems: state.addedItems
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
      removeItem: (id)=>{dispatch(removeItem(id))},
      addQuantity: (id)=>{dispatch(addQuantity(id))},
      subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Cart));